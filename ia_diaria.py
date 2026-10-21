"""Tu PC prepara los datos de la web y los sube cifrados a GitHub.

Dos formas de ejecutarlo:
  python ia_diaria.py            -> tareas de Aules + plan escrito por qwen (al iniciar sesión)
  python ia_diaria.py tareas     -> solo las tareas de Aules (rápido, cada hora)

Necesita en este PC:
  - Ollama con el modelo descargado (ollama pull qwen3:8b)   [solo para el plan]
  - Git instalado, y esta carpeta es el repositorio de GitHub
  - pip install cryptography
  - Variables de entorno de usuario: AULES_TOKEN y DASH_PASSWORD (la contraseña de la web)

Si algo falla, mira el archivo registro.txt de esta carpeta.
"""
import json
import os
import pathlib
import re
import subprocess
import sys
import time
import traceback
import urllib.parse
import urllib.request
from datetime import datetime

from cifrado import cifrar

MODELO = "qwen3:8b"
OLLAMA = "http://127.0.0.1:11434"
AULES = "https://aules.edu.gva.es/fp/webservice/rest/server.php"
REPO = pathlib.Path(__file__).resolve().parent  # la carpeta donde está este archivo
BLOQUEO = REPO / ".bloqueo"                     # evita que dos ejecuciones se pisen
REGISTRO = REPO / "registro.txt"

# ---------------------------------------------------------------------------
# AQUÍ ESTÁ LA TAREA DE QWEN. Si quieres cambiarla, edita este texto.
# ---------------------------------------------------------------------------
SISTEMA = """Eres el asistente personal de estudios de un estudiante de 2º de DAM (Desarrollo de Aplicaciones Multiplataforma).
Cada vez que se enciende su ordenador recibes la fecha de hoy y la lista de sus entregas pendientes de Aules, ya ordenadas de la más urgente a la menos urgente. El tiempo que queda ya está calculado: no lo recalcules.

Tu tarea: escribir un plan breve para hoy.

Reglas:
- Responde en español, claro y sin jerga.
- Usa SOLO los datos que recibes. Nunca inventes tareas, fechas ni asignaturas.
- Empieza por lo más urgente: las vencidas y las que vencen en menos de 48 horas.
- Para cada tarea pon: nombre, asignatura, cuánto queda y una sugerencia de qué avanzar hoy en una línea.
- Termina con "Qué haría primero:" y un máximo de 3 puntos.
- Máximo 200 palabras. Texto simple con guiones, sin tablas ni títulos con almohadillas.
- Si no hay entregas pendientes, responde solo: "No tienes entregas pendientes. Buen día."
"""


def registrar(texto):
    with open(REGISTRO, "a", encoding="utf-8") as f:
        f.write(f"{datetime.now():%d/%m %H:%M:%S}  {texto}\n")


def esperar(funcion, intentos, pausa, descripcion):
    """Reintenta hasta que funcione (al encender el PC, la red y Ollama tardan en estar listos)."""
    for _ in range(intentos):
        try:
            return funcion()
        except Exception:
            time.sleep(pausa)
    sys.exit(f"No se pudo: {descripcion}")


def ollama_listo():
    urllib.request.urlopen(OLLAMA + "/api/tags", timeout=5).read()
    return True


def pedir_aules(token):
    datos = {
        "wstoken": token,
        "wsfunction": "core_calendar_get_action_events_by_timesort",
        "moodlewsrestformat": "json",
        "timesortfrom": int(time.time()) - 14 * 86400,
        "limitnum": 50,
    }
    peticion = urllib.request.Request(AULES, data=urllib.parse.urlencode(datos).encode())
    with urllib.request.urlopen(peticion, timeout=30) as r:
        respuesta = json.load(r)
    if "exception" in respuesta:
        raise RuntimeError(respuesta.get("errorcode", "error"))
    return respuesta.get("events", [])


def pendientes(eventos):
    tareas = [e for e in eventos if (e.get("action") or {}).get("actionable", True)]
    tareas.sort(key=lambda e: e.get("timesort", 0))
    return tareas


def construir_tareas(eventos):
    """Lo que ve la web: solo nombre, asignatura, fecha y enlace."""
    return {
        "actualizado": int(time.time()),
        "tareas": [
            {
                "nombre": e.get("name", "Sin nombre"),
                "asignatura": (e.get("course") or {}).get("fullname", ""),
                "vence": e.get("timesort", 0),
                "url": e.get("url", ""),
            }
            for e in pendientes(eventos)
        ],
    }


def cuanto_queda(segundos):
    pasada = segundos < 0
    minutos = abs(segundos) // 60
    horas, dias = minutos // 60, minutos // 1440
    if dias >= 2:
        texto = f"{dias} días"
    elif horas >= 1:
        texto = f"{horas} horas"
    else:
        texto = f"{max(minutos, 1)} minutos"
    return f"VENCIDA hace {texto}" if pasada else f"quedan {texto}"


def preparar_mensaje(eventos):
    ahora = int(time.time())
    tareas = pendientes(eventos)
    hoy = datetime.now().strftime("%A %d/%m/%Y, %H:%M")
    lineas = [f"Fecha y hora actual: {hoy}", "", "Entregas pendientes:"]
    if not tareas:
        lineas.append("(ninguna)")
    for i, e in enumerate(tareas, 1):
        limite = datetime.fromtimestamp(e["timesort"]).strftime("%d/%m %H:%M")
        asignatura = (e.get("course") or {}).get("fullname", "sin asignatura")
        lineas.append(f"{i}. {e.get('name', 'Sin nombre')} | {asignatura} | límite {limite} | {cuanto_queda(e['timesort'] - ahora)}")
    return "\n".join(lineas)


def preguntar_a_qwen(mensaje):
    cuerpo = {
        "model": MODELO,
        "stream": False,
        "think": False,  # sin "pensar en voz alta": más rápido
        "options": {"temperature": 0.3, "num_ctx": 4096},
        "messages": [
            {"role": "system", "content": SISTEMA},
            {"role": "user", "content": mensaje},
        ],
    }
    peticion = urllib.request.Request(
        OLLAMA + "/api/chat",
        data=json.dumps(cuerpo).encode(),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(peticion, timeout=900) as r:  # tu PC es lento: hasta 15 min
        texto = json.load(r)["message"]["content"]
    return re.sub(r"<think>.*?</think>", "", texto, flags=re.S).strip()


def git(*args):
    return subprocess.run(
        ["git", "-C", str(REPO), *args],
        check=True, capture_output=True, text=True, timeout=120,
    )


def publicar(archivos, contrasena, mensaje):
    """Cifra cada archivo (docs/<nombre>.enc) y lo sube. GitHub se encarga de republicar la web."""
    esperar(lambda: git("pull", "--rebase"), 5, 20, "no se pudo actualizar el repositorio (git pull)")
    (REPO / "docs").mkdir(exist_ok=True)
    for nombre, datos in archivos.items():
        (REPO / "docs" / f"{nombre}.enc").write_text(json.dumps(cifrar(datos, contrasena)), encoding="utf-8")
        git("add", f"docs/{nombre}.enc")
    git("-c", "user.name=IA diaria", "-c", "user.email=ia-diaria@users.noreply.github.com",
        "commit", "-m", mensaje)
    esperar(lambda: git("push"), 5, 20, "no se pudo subir a GitHub (git push)")


def hay_bloqueo():
    return BLOQUEO.exists() and time.time() - BLOQUEO.stat().st_mtime < 40 * 60


def main(modo):
    token = os.environ.get("AULES_TOKEN", "").strip()
    contrasena = os.environ.get("DASH_PASSWORD", "")
    if not token:
        sys.exit("Falta la variable de entorno AULES_TOKEN.")
    if len(contrasena) < 12:
        sys.exit("Falta la variable de entorno DASH_PASSWORD (mínimo 12 caracteres).")
    if not (REPO / ".git").exists():
        sys.exit(f"Esta carpeta no es un repositorio de git: {REPO}")

    if modo == "tareas" and hay_bloqueo():
        registrar("Hay otra ejecución en marcha; salgo sin hacer nada.")
        return
    if modo != "tareas":  # el plan completo espera a que acabe cualquier otra ejecución
        for _ in range(40):
            if not hay_bloqueo():
                break
            time.sleep(30)

    BLOQUEO.write_text(str(os.getpid()))
    try:
        eventos = esperar(lambda: pedir_aules(token), 12, 10, "no se pudo conectar con Aules")
        tareas = construir_tareas(eventos)
        publicar({"tareas": tareas}, contrasena, "Actualizar tareas")
        registrar(f"Tareas publicadas: {len(tareas['tareas'])}")
        print(f"Tareas publicadas: {len(tareas['tareas'])}")

        if modo != "tareas":
            esperar(ollama_listo, 60, 5, "Ollama no arrancó")
            plan = preguntar_a_qwen(preparar_mensaje(eventos))
            print(plan)
            publicar({"plan": {"actualizado": int(time.time()), "texto": plan}}, contrasena, "Plan diario")
            registrar("Plan publicado.")
            print("Plan publicado en la web.")
    finally:
        BLOQUEO.unlink(missing_ok=True)


if __name__ == "__main__":
    try:
        main(sys.argv[1] if len(sys.argv) > 1 else "completo")
    except SystemExit as error:
        if error.code not in (None, 0):
            registrar(f"ERROR: {error.code}")
        raise
    except Exception:
        registrar("ERROR:\n" + traceback.format_exc())
        raise
