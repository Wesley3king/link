const CacheName = 'v2';
const resourcesToPrecache = ['./index.html','./css/style.css','./manifest.json','./192x192-icon.png','./512x512-icon.png','./maskable_icon.png','./img-conf/nuvem.png','./img-conf/coffee.png','./img-conf/net.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CacheName)
    .then(cache => (cache.addAll(resourcesToPrecache))),
    )
});
// Clear cache on activate


self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request)))
  )
});