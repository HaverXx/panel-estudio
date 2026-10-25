// Service worker mínimo: permite instalar la web como app y abrirla aunque no haya internet.
// Primero intenta la red (siempre ves lo último); si no hay red, usa la copia guardada.
// Los archivos .enc (tus datos) nunca se guardan aquí.
const V = "panel-v1";
const BASE = ["./", "index.html", "apuntes.js", "manifest.json"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.endsWith(".enc")) return;
  e.respondWith(
    fetch(e.request).then(r => { const copia = r.clone(); caches.open(V).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request))
  );
});
