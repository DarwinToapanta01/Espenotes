const CACHE_NAME = 'espenotes-v1';
const urlsToCache = [
  './',
  './index.html',
  './src/css/app.css',
  './src/js/app.js',
  './manifest.webmanifest.json',
  './src/icons/icon-192x192.png',
  './src/icons/icon-512x512.png',
  './src/img/images.jpeg',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://code.getmdl.io/1.3.0/material.deep_purple-amber.min.css',
  'https://code.getmdl.io/1.3.0/material.min.js'
];

self.addEventListener("install", (event) => {
  console.log("Almacenando archivos en caché... ESPE");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("Cache abierto");
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log("ESPE Service Worker installed");
        self.skipWaiting(); // Forzar la activación inmediata del SW
      })
      .catch((error) => {
        console.error("Error al cachear archivos:", error);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Eliminando cache antiguo:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker recibiendo una solicitud:", event.request.url);
  
  // Estrategia Cache First
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolverlo
        if (response) {
          console.log("Sirviendo desde cache:", event.request.url);
          return response;
        }
        
        // Si no está en cache, hacer fetch a la red
        console.log("Solicitando desde red:", event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Verificar si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta
            const responseToCache = response.clone();
            
            // Agregar al cache
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Si la red falla, intentar servir index.html para navegación
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
