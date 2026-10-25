"""Cifrado AES-256-GCM compartido. La clave sale de tu contraseña (PBKDF2).

SAL e ITERACIONES tienen que ser iguales que en docs/index.html.
"""
import base64
import hashlib
import json
import os

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

SAL = b"aules-dashboard-v1"
ITERACIONES = 600_000


def cifrar(datos: dict, contrasena: str) -> dict:
    clave = hashlib.pbkdf2_hmac("sha256", contrasena.encode("utf-8"), SAL, ITERACIONES, dklen=32)
    iv = os.urandom(12)
    texto = json.dumps(datos, ensure_ascii=False).encode("utf-8")
    cifrado = AESGCM(clave).encrypt(iv, texto, None)
    return {
        "v": 1,
        "iv": base64.b64encode(iv).decode("ascii"),
        "datos": base64.b64encode(cifrado).decode("ascii"),
    }


def descifrar(payload: dict, contrasena: str) -> dict:
    """Lo contrario de cifrar(): abre un archivo .enc con la misma contraseña."""
    clave = hashlib.pbkdf2_hmac("sha256", contrasena.encode("utf-8"), SAL, ITERACIONES, dklen=32)
    texto = AESGCM(clave).decrypt(
        base64.b64decode(payload["iv"]), base64.b64decode(payload["datos"]), None
    )
    return json.loads(texto.decode("utf-8"))
