// Service worker: permite instalar la web como app, abrirla sin internet y recibir avisos (notificaciones).
// Primero intenta la red (siempre ves lo último); si no hay red, usa la copia guardada.
// Los archivos .enc (tus datos) nunca se guardan aquí.
const V = "panel-v2";
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

// ---- Avisos: llegan desde GitHub aunque la app esté cerrada ----
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Panel de estudio", {
    body: d.body || "",
    icon: "icon-192.png",
    tag: d.tag || undefined,
    data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    if (/^https?:/i.test(url)) return self.clients.openWindow(url);   // p. ej. la tarea en Aules
    for (const c of cs) {
      if ("focus" in c) { c.focus(); if ("navigate" in c) c.navigate(new URL(url, self.registration.scope).href); return; }
    }
    return self.clients.openWindow(url);
  }));
});
