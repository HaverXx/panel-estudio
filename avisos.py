"""Avisos al móvil con ntfy.sh. Lo ejecuta GitHub Actions cada 15 minutos (no hace falta tu PC encendido).

Lee docs/tareas.enc (lo que ya sube ia_diaria.py), lo abre con tu contraseña y, cuando una entrega
está cerca, manda una notificación al móvil. No avisa dos veces de lo mismo.

Variables (en GitHub: Settings > Secrets and variables > Actions):
  DASH_PASSWORD  la misma contraseña de la web
  NTFY_TOPIC     el nombre secreto del canal de ntfy (largo y aleatorio)
Opcionales: NTFY_SERVER (por defecto https://ntfy.sh), AVISOS_HORAS (por defecto "24,3").

Uso:  python avisos.py          -> revisar y avisar
      python avisos.py probar   -> además manda una notificación de prueba
      NTFY_SIMULAR=1 ...        -> no envía nada, solo lo escribe en pantalla
"""
import json
import os
import pathlib
import sys
import time
import urllib.request
from datetime import datetime
from zoneinfo import ZoneInfo

from cifrado import descifrar

REPO = pathlib.Path(__file__).resolve().parent
ARCHIVOS = ["tareas"]  # docs/tareas.enc. Para otra cuenta, añade p. ej. "tareas-mireia"
ESTADO = REPO / ".estado" / "avisos.json"
ZONA = ZoneInfo("Europe/Madrid")
DIAS = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"]


def horas_de_aviso():
    texto = os.environ.get("AVISOS_HORAS", "24,3")
    return sorted({float(h) for h in texto.split(",") if h.strip()}, reverse=True)


def enviar(mensaje):
    topic = os.environ["NTFY_TOPIC"].strip()
    if os.environ.get("NTFY_SIMULAR"):
        print("[SIMULADO]", json.dumps({"topic": topic[:3] + "…", **mensaje}, ensure_ascii=False))
        return
    servidor = os.environ.get("NTFY_SERVER", "https://ntfy.sh").rstrip("/")
    cuerpo = json.dumps({"topic": topic, **mensaje}).encode("utf-8")
    peticion = urllib.request.Request(servidor, data=cuerpo, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(peticion, timeout=20) as r:
        r.read()


def cuanto_queda(segundos):
    minutos = int(segundos // 60)
    if minutos >= 48 * 60:
        return f"{minutos // 1440} días"
    if minutos >= 120:
        return f"{round(minutos / 60)} horas"
    if minutos >= 60:
        return f"1 hora {minutos - 60} min"
    return f"{max(minutos, 1)} minutos"


def cargar_estado():
    try:
        return json.loads(ESTADO.read_text(encoding="utf-8"))
    except Exception:
        return {}


def guardar_estado(estado):
    ESTADO.parent.mkdir(exist_ok=True)
    ESTADO.write_text(json.dumps(estado), encoding="utf-8")


def main(argumentos):
    contrasena = os.environ.get("DASH_PASSWORD", "")
    if not contrasena:
        sys.exit("Falta el secreto DASH_PASSWORD.")
    if not os.environ.get("NTFY_TOPIC", "").strip():
        sys.exit("Falta el secreto NTFY_TOPIC.")

    if "probar" in argumentos:
        enviar({"title": "Avisos activados", "message": "Si lees esto, las notificaciones funcionan.", "tags": ["white_check_mark"]})

    ahora = int(time.time())
    horas = horas_de_aviso()
    estado = {k: v for k, v in cargar_estado().items() if v > ahora - 7 * 86400}  # olvida lo viejo
    enviados = 0

    for nombre_archivo in ARCHIVOS:
        ruta = REPO / "docs" / f"{nombre_archivo}.enc"
        if not ruta.exists():
            continue
        try:
            datos = descifrar(json.loads(ruta.read_text(encoding="utf-8")), contrasena)
        except Exception:
            sys.exit(f"No se pudo abrir {ruta.name}: ¿DASH_PASSWORD es la misma contraseña de la web?")

        for tarea in datos.get("tareas", []):
            vence = int(tarea.get("vence", 0))
            restante = vence - ahora
            if restante <= 0:
                continue  # ya vencida: no molestamos
            alcanzados = [h for h in horas if restante <= h * 3600]
            if not alcanzados:
                continue
            nombre = tarea.get("nombre", "Entrega")
            base = f"{nombre_archivo}|{nombre}|{vence}"
            claves = [f"{base}|{h:g}" for h in alcanzados]
            umbral = min(alcanzados)
            if f"{base}|{umbral:g}" in estado:
                continue

            limite = datetime.fromtimestamp(vence, ZONA)
            mensaje = {
                "title": f"⏰ {nombre}",
                "message": f"{tarea.get('asignatura', '')}\nVence {DIAS[limite.weekday()]} {limite:%d/%m %H:%M} · quedan {cuanto_queda(restante)}".strip(),
                "priority": 5 if umbral <= 1 else 4 if umbral <= 3 else 3,
                "tags": ["rotating_light" if umbral <= 3 else "books"],
            }
            if str(tarea.get("url", "")).startswith("http"):
                mensaje["click"] = tarea["url"]
            enviar(mensaje)
            for c in claves:
                estado[c] = vence
            guardar_estado(estado)  # se guarda tras cada envío: si algo falla después, no se repite
            enviados += 1

    guardar_estado(estado)
    print(f"Avisos enviados: {enviados}")


if __name__ == "__main__":
    main(sys.argv[1:])
