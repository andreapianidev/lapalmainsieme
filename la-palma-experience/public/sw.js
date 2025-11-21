const CACHE_VERSION = '1.3';
const STATIC_CACHE = `la-palma-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `la-palma-dynamic-v${CACHE_VERSION}`;
const IMAGE_CACHE = `la-palma-images-v${CACHE_VERSION}`;
const MAX_CACHE_SIZE = 50; // Maximum number of items in dynamic cache

// Critical assets to pre-cache
const staticAssets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Utility: Limit cache size
const limitCacheSize = (cacheName, maxItems) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(() => limitCacheSize(cacheName, maxItems));
      }
    });
  });
};

// Install event - pre-cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker v' + CACHE_VERSION);

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Pre-caching static assets');
        return cache.addAll(staticAssets);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker v' + CACHE_VERSION);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch event - smart caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-http(s) requests
  if (!request.url.startsWith('http')) {
    return;
  }

  // Strategy 1: Cache First for images (performance)
  if (request.destination === 'image' || /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          // Only cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(IMAGE_CACHE).then((cache) => {
              cache.put(request, responseClone);
              limitCacheSize(IMAGE_CACHE, MAX_CACHE_SIZE);
            });
          }
          return response;
        }).catch(() => {
          // Return placeholder image on failure
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="#eee" width="400" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="20">Image Offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        });
      })
    );
    return;
  }

  // Strategy 2: Network First for API calls and weather data
  if (url.hostname === 'api.open-meteo.com' ||
      url.hostname === 'api.openweathermap.org' ||
      url.hostname === 'api.weatherapi.com') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || new Response(JSON.stringify({
              error: 'Offline - cached data unavailable'
            }), {
              status: 503,
              headers: { 'Content-Type': 'application/json' }
            });
          });
        })
    );
    return;
  }

  // Strategy 3: Stale-While-Revalidate for JS/CSS bundles (including code-split chunks)
  if (request.destination === 'script' ||
      request.destination === 'style' ||
      /\.(js|css)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
              limitCacheSize(DYNAMIC_CACHE, MAX_CACHE_SIZE);
            });
          }
          return networkResponse;
        });

        // Return cached version immediately, but update cache in background
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Strategy 4: Network First with cache fallback for HTML/documents
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
            limitCacheSize(DYNAMIC_CACHE, MAX_CACHE_SIZE);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // Fallback for HTML requests
          if (request.headers.get('Accept').includes('text/html')) {
            return caches.match('/index.html');
          }

          // Generic offline response
          return new Response('Offline - Content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Message event - allow cache clearing from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      }).then(() => {
        return self.clients.matchAll();
      }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'CACHE_CLEARED' });
        });
      })
    );
  }
});
