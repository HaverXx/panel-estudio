"""Crea las claves de los avisos. Se ejecuta UNA sola vez, en tu PC:

    python generar_claves.py

Hace dos cosas:
  1. Guarda la clave PÚBLICA en docs/vapid-publica.txt (la web la necesita; no es secreta).
  2. Te muestra la clave PRIVADA en pantalla. Cópiala en GitHub como secreto con el nombre
     VAPID_PRIVATE_KEY (Settings > Secrets and variables > Actions). No la subas a ningún archivo.
"""
import base64
import pathlib

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import ec

DESTINO = pathlib.Path(__file__).resolve().parent / "docs" / "vapid-publica.txt"


def b64(datos: bytes) -> str:
    return base64.urlsafe_b64encode(datos).rstrip(b"=").decode("ascii")


if DESTINO.exists():
    raise SystemExit(f"Ya existe {DESTINO}. Si lo regeneras, los avisos ya activados dejarán de funcionar.\n"
                     "Borra ese archivo solo si de verdad quieres empezar de cero.")

clave = ec.generate_private_key(ec.SECP256R1())
privada = b64(clave.private_numbers().private_value.to_bytes(32, "big"))
publica = b64(clave.public_key().public_bytes(serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint))
DESTINO.write_text(publica, encoding="utf-8")

print("\nListo. Clave pública guardada en docs/vapid-publica.txt")
print("\nCLAVE PRIVADA (cópiala ahora en GitHub como secreto VAPID_PRIVATE_KEY):\n")
print(privada)
print("\nDespués haz git add, commit y push para subir docs/vapid-publica.txt.\n")
