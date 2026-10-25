"""Manda las notificaciones al móvil (Web Push). Lo ejecuta GitHub Actions cada 15 minutos.

Lee tus datos cifrados (tareas de Aules, tus tareas, exámenes y eventos) y tu configuración de avisos
(la que eliges en la web, en Ajustes > Notificaciones), y envía un aviso a cada dispositivo que lo
tenga activado. No hace falta ninguna otra app: el aviso lo muestra la propia web instalada.

Secretos de GitHub necesarios:  DASH_PASSWORD (la contraseña de la web)  y  VAPID_PRIVATE_KEY.

Uso:  python avisos.py          -> revisar y avisar
      python avisos.py probar   -> además manda un aviso de prueba a tus dispositivos
      AVISOS_SIMULAR=1 ...      -> no envía nada, solo muestra lo que enviaría
"""
import base64
import json
import os
import pathlib
import sys
import time
from datetime import datetime
from zoneinfo import ZoneInfo

from cifrado import descifrar

REPO = pathlib.Path(__file__).resolve().parent
ESTADO = REPO / ".estado" / "avisos.json"
ZONA = ZoneInfo("Europe/Madrid")
DIAS = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"]
SUB = "https://haverxx.github.io"      # dato de contacto que exige el estándar Web Push
MAX_SUELTOS = 3                        # si hay más avisos a la vez, se juntan en uno solo
CFG_DEF = {"tareas": True, "mis": True, "examenes": True, "eventos": True, "antes": [1440, 180],
           "resumen": False, "horaResumen": "08:00", "silencio": False, "desde": "23:00", "hasta": "08:00"}


# ---------------------------------------------------------------- lectura de datos
def abrir(nombre, contrasena):
    ruta = REPO / "docs" / f"{nombre}.enc"
    if not ruta.exists():
        return None
    try:
        return descifrar(json.loads(ruta.read_text(encoding="utf-8")), contrasena)
    except Exception:
        sys.exit(f"No se pudo abrir {ruta.name}: ¿DASH_PASSWORD es la misma contraseña de la web?")


def a_ts(texto):
    """'2026-11-09T09:00' (hora de España, como lo escribes en la web) -> segundos."""
    return int(datetime.fromisoformat(texto).replace(tzinfo=ZONA).timestamp())


def recoger(cfg, tareas, web):
    """Junta todo lo que puede avisar, según lo que hayas marcado en la web."""
    hechos = web.get("hechos", {})
    cosas = []
    if cfg["tareas"]:
        for t in (tareas or {}).get("tareas", []):
            vence = int(t.get("vence", 0))
            if hechos.get(f"au_{t.get('nombre')}|{vence}"):
                continue
            url = t.get("url", "")
            cosas.append({"id": f"au|{t.get('nombre')}|{vence}", "icono": "📝", "titulo": t.get("nombre", "Entrega"),
                          "detalle": t.get("asignatura", ""), "ts": vence, "url": url if url.startswith("http") else "./#tareas"})
    if cfg["mis"]:
        for t in web.get("misTareas", []):
            if t.get("hecha") or not t.get("fecha"):
                continue
            cosas.append({"id": f"mi|{t.get('id')}|{t['fecha']}", "icono": "✅", "titulo": t.get("nombre", "Tarea"),
                          "detalle": "", "ts": a_ts(t["fecha"]), "url": "./#tareas"})
    if cfg["examenes"]:
        for e in web.get("examenes", []):
            if e.get("aprox") or not e.get("fecha"):
                continue  # fecha sin confirmar: mejor no avisar de algo que puede ser mentira
            cosas.append({"id": f"ex|{e.get('id')}|{e['fecha']}", "icono": "🎓", "titulo": e.get("titulo", "Examen"),
                          "detalle": "", "ts": a_ts(e["fecha"]), "url": "./#examenes"})
    if cfg["eventos"]:
        for e in web.get("eventos", []):
            if not e.get("fecha"):
                continue
            cosas.append({"id": f"ev|{e.get('id', e.get('titulo'))}|{e['fecha']}", "icono": "📅", "titulo": e.get("titulo", "Evento"),
                          "detalle": e.get("lugar", ""), "ts": a_ts(e["fecha"]), "url": "./#examenes"})
    return cosas


# ---------------------------------------------------------------- textos
def cuanto_queda(segundos):
    minutos = int(segundos // 60)
    if minutos >= 48 * 60:
        return f"{minutos // 1440} días"
    if minutos >= 120:
        return f"{round(minutos / 60)} horas"
    if minutos >= 60:
        return f"1 hora y {minutos - 60} min"
    return f"{max(minutos, 1)} minutos"


def cuando(ts):
    f = datetime.fromtimestamp(ts, ZONA)
    return f"{DIAS[f.weekday()]} {f:%d/%m %H:%M}"


def en_silencio(cfg, ahora_local):
    if not cfg["silencio"]:
        return False
    d, h, ahora = cfg["desde"], cfg["hasta"], f"{ahora_local:%H:%M}"
    return (d <= ahora < h) if d <= h else (ahora >= d or ahora < h)


# ---------------------------------------------------------------- envío
def enviar_a_todos(dispositivos, carga, clave):
    """Devuelve cuántos dispositivos lo recibieron (0 = no llegó a ninguno)."""
    if os.environ.get("AVISOS_SIMULAR"):
        print("[SIMULADO]", json.dumps(carga, ensure_ascii=False))
        return len(dispositivos)
    from pywebpush import WebPushException, webpush
    bien = 0
    for d in dispositivos:
        nombre = d.get("nombre", "?")
        try:
            webpush(subscription_info=d["sub"], data=json.dumps(carga, ensure_ascii=False),
                    vapid_private_key=clave, vapid_claims={"sub": SUB}, ttl=86400, headers={"Urgency": "high"})
            bien += 1
            print(f"Enviado a '{nombre}'.")
        except WebPushException as error:
            codigo = getattr(error.response, "status_code", None)
            if codigo in (404, 410):
                print(f"Dispositivo '{nombre}': el aviso ya no existe (se desinstaló la app o se desactivaron los avisos). Actívalos de nuevo en ese dispositivo.")
            elif codigo in (401, 403):
                print(f"Dispositivo '{nombre}': el servicio de avisos rechazó la clave (HTTP {codigo}). Desactiva y vuelve a activar los avisos en ese dispositivo.")
            else:
                print(f"Fallo al avisar a '{nombre}' (HTTP {codigo}): {error}")
        except Exception as error:  # clave mal pegada, datos corruptos...
            print(f"Fallo al avisar a '{nombre}': {type(error).__name__}: {error}")
    return bien


def comprobar_claves(clave):
    """La clave privada de GitHub tiene que ser la pareja de docs/vapid-publica.txt; si no, ningún móvil recibe nada."""
    from cryptography.hazmat.primitives import serialization
    from cryptography.hazmat.primitives.asymmetric import ec
    try:
        crudo = base64.urlsafe_b64decode(clave + "=" * (-len(clave) % 4))
        privada = ec.derive_private_key(int.from_bytes(crudo, "big"), ec.SECP256R1())
    except Exception:
        sys.exit("VAPID_PRIVATE_KEY no es una clave válida. Cópiala entera (una sola línea, sin comillas ni espacios) "
                 "de lo que mostró generar_claves.py y vuelve a guardarla como secreto en GitHub.")
    if len(crudo) != 32:
        sys.exit("VAPID_PRIVATE_KEY no tiene el tamaño correcto: ¿has copiado la clave PÚBLICA por error? Usa la privada.")
    publica = base64.urlsafe_b64encode(privada.public_key().public_bytes(
        serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint)).rstrip(b"=").decode("ascii")
    esperada = (REPO / "docs" / "vapid-publica.txt").read_text(encoding="utf-8").strip()
    if publica != esperada:
        sys.exit("La clave privada guardada en GitHub (VAPID_PRIVATE_KEY) NO corresponde con docs/vapid-publica.txt, "
                 "así que los móviles rechazan todos los avisos.\n"
                 "Solución: o vuelves a guardar la clave privada que te dio generar_claves.py, o borras docs/vapid-publica.txt, "
                 "ejecutas generar_claves.py otra vez, guardas la nueva privada en GitHub, subes el archivo nuevo y "
                 "activas los avisos de nuevo en cada dispositivo.")
    print("Claves VAPID correctas.")


def cargar_estado():
    try:
        return json.loads(ESTADO.read_text(encoding="utf-8"))
    except Exception:
        return {}


def guardar_estado(estado):
    ESTADO.parent.mkdir(exist_ok=True)
    ESTADO.write_text(json.dumps(estado), encoding="utf-8")


# ---------------------------------------------------------------- principal
def main(argumentos):
    contrasena, clave = os.environ.get("DASH_PASSWORD", ""), os.environ.get("VAPID_PRIVATE_KEY", "").strip().strip("\"'")
    if not contrasena:
        sys.exit("Falta el secreto DASH_PASSWORD.")
    if not clave and not os.environ.get("AVISOS_SIMULAR"):
        sys.exit("Falta el secreto VAPID_PRIVATE_KEY (créalo con generar_claves.py).")

    ajustes = abrir("avisos", contrasena)
    dispositivos = [d for d in (ajustes or {}).get("dispositivos", []) if d.get("sub", {}).get("endpoint")]
    if not dispositivos:
        print("Aún no hay ningún dispositivo con avisos activados (actívalo en la web: Ajustes > Notificaciones).")
        return
    cfg = {**CFG_DEF, **ajustes.get("cfg", {})}
    print("Dispositivos con avisos:", ", ".join(d.get("nombre", "?") for d in dispositivos))
    if not os.environ.get("AVISOS_SIMULAR"):
        comprobar_claves(clave)

    if "probar" in argumentos:
        llegaron = enviar_a_todos(dispositivos, {"title": "Avisos activados ✅", "body": "Si ves esto, las notificaciones funcionan.", "url": "./", "tag": "prueba"}, clave)
        if not llegaron:
            sys.exit("La prueba no llegó a ningún dispositivo. El motivo está en las líneas de arriba.")

    ahora = int(time.time())
    ahora_local = datetime.fromtimestamp(ahora, ZONA)
    estado = {k: v for k, v in cargar_estado().items() if v > ahora - 7 * 86400}
    if en_silencio(cfg, ahora_local):
        print("Ahora mismo es hora de no molestar; los avisos pendientes salen al terminar.")
        guardar_estado(estado)
        return

    cosas = recoger(cfg, abrir("tareas", contrasena), abrir("estado", contrasena) or {})
    pendientes = []  # (cosa, claves a marcar, restante)
    for c in cosas:
        restante = c["ts"] - ahora
        if restante <= 0:
            continue
        alcanzados = [m for m in cfg["antes"] if restante <= m * 60]
        if not alcanzados:
            continue
        menor = min(alcanzados)
        if f"{c['id']}|{menor}" in estado:
            continue
        pendientes.append((c, [f"{c['id']}|{m}" for m in alcanzados], restante))
    pendientes.sort(key=lambda p: p[0]["ts"])

    marcar = {}
    if pendientes and len(pendientes) > MAX_SUELTOS:
        lineas = [f"{c['icono']} {c['titulo']} · {cuando(c['ts'])}" for c, _, _ in pendientes[:6]]
        carga = {"title": f"Tienes {len(pendientes)} avisos", "body": "\n".join(lineas), "url": "./#tareas", "tag": "varios"}
        if enviar_a_todos(dispositivos, carga, clave):
            for c, claves, _ in pendientes:
                marcar.update({k: c["ts"] for k in claves})
    else:
        for c, claves, restante in pendientes:
            cuerpo = f"{c['detalle']}\n" if c["detalle"] else ""
            carga = {"title": f"{c['icono']} {c['titulo']}", "body": f"{cuerpo}{cuando(c['ts'])} · quedan {cuanto_queda(restante)}",
                     "url": c["url"], "tag": c["id"]}
            if enviar_a_todos(dispositivos, carga, clave):
                marcar.update({k: c["ts"] for k in claves})
                estado.update(marcar)
                guardar_estado(estado)  # tras cada envío: si algo falla después, no se repite
    estado.update(marcar)

    # Resumen diario (si lo activaste): una vez al día, a partir de la hora elegida
    if cfg["resumen"]:
        hoy = f"resumen|{ahora_local:%Y-%m-%d}"
        h, m = (int(x) for x in cfg["horaResumen"].split(":"))
        minutos = ahora_local.hour * 60 + ahora_local.minute
        if hoy not in estado and h * 60 + m <= minutos < h * 60 + m + 360:
            proximas = sorted((c for c in cosas if 0 < c["ts"] - ahora <= 72 * 3600), key=lambda c: c["ts"])
            if proximas:
                lineas = [f"{c['icono']} {c['titulo']} · {cuando(c['ts'])}" for c in proximas[:6]]
                if len(proximas) > 6:
                    lineas.append(f"…y {len(proximas) - 6} más")
                carga = {"title": "Resumen: próximos 3 días", "body": "\n".join(lineas), "url": "./#tareas", "tag": "resumen"}
                if enviar_a_todos(dispositivos, carga, clave):
                    estado[hoy] = ahora
            else:
                estado[hoy] = ahora  # nada que contar hoy

    guardar_estado(estado)
    print(f"Avisos enviados: {len(pendientes)}")


if __name__ == "__main__":
    main(sys.argv[1:])
