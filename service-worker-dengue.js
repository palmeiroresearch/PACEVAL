// Service Worker para Monitor Dengue
const CACHE_VERSION = 'dengue-monitor-v2.0.0';
const CACHE_NAME = `dengue-monitor-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  './',
  './dengue-monitor-v2.html',
  './manifest-dengue.json'
];

// Instalar y cachear
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .catch(err => console.log('Error caching assets:', err))
  );
});

// Activar y limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Estrategia: Cache first, luego network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // No cachear si no es una respuesta válida
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          
          // Clonar la respuesta
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Si falla, intentar servir la página principal desde caché
        return caches.match('./dengue-monitor-v2.html');
      })
  );
});
