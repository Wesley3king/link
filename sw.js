const CacheName = 'v3';
const resourcesToPrecache = [
  '/',
  './index.html'
];
/*,
  './index.html',
  './css/style.css',
  './manifest.json',
  './192x192-icon.png',
  './512x512-icon.png',
  './maskable_icon.png',
  './img-conf/nuvem.png',
  './img-conf/coffee.png',
  './img-conf/net.png'*/

/*const resourcesToPrecache = ['https://wesley3king.github.io/link/index.html','https://wesley3king.github.io/link/css/style.css','https://wesley3king.github.io/link/manifest.json','.https://wesley3king.github.io/link/192x192-icon.png','https://wesley3king.github.io/link/512x512-icon.png','https://wesley3king.github.io/link/maskable_icon.png','https://wesley3king.github.io/link/img-conf/nuvem.png','https://wesley3king.github.io/link/img-conf/coffee.png','https://wesley3king.github.io/link/img-conf/net.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CacheName)
    .then(cache => (cache.addAll(resourcesToPrecache))),
    )
});*/
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CacheName).then(function (cache) {
      return cache.addAll(resourcesToPrecache);
    })
  )
});
// Clear cache on activate


self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
  .then(cacheResponse => (cacheResponse || fetch(event.request)))
  )
});