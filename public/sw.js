// HhCompile.github.io Service Worker
// Strategy: precache core shell on install, runtime cache for navigation requests.
// 零依赖，纯标准 API。

const VERSION = 'v1.0.0';
const CORE_CACHE = `core-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;

// 需要预缓存的核心资源。dist 产物的 hash 文件名构建时才能确定，
// 所以这里用通配 fetch + skipWaiting 策略在 install 后即时缓存。
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CORE_CACHE && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 只处理 GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // 只处理同源
  if (url.origin !== self.location.origin) return;

  // 导航请求 → network-first，回落到缓存，最后回落到 /index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((m) => m || caches.match('/index.html')))
    );
    return;
  }

  // 静态资源 → cache-first，回落到 network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        // 只缓存 2xx
        if (!response || response.status !== 200) return response;
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
        return response;
      }).catch(() => cached);
    })
  );
});
