const CACHE_NAME = 'v5';
const OFFLINE_URL = 'index.html';
const CACHE = [
          './css/style.css',
          './maskable_icon.png',
          './manifest.json',
          './index.html'
        ];

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      cache
        .addAll(CACHE);
      return cache
        .addAll(CACHE);
    }),
  );

  //adicionar a OFFLINE_URL
  event.waitUntil((async () => {

    console.log('URL Offline armazenada '+OFFLINE_URL);

    const cache = await caches.open(CACHE_NAME);
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));

  })());
});


this.addEventListener('activate', function (event) {

  console.log("Activate...");

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {

          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          }),
      );
    }),
  );
});



this.addEventListener('fetch', function (event) {

  console.log("Fetch...");

  //On network response
  event.respondWith(
    //verificar se a resposta está em cache ou na rede
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    }).catch(() => {

      console.log('Retornando OFFLINE_URL...');

      return caches.match(OFFLINE_URL);

    })

  )

});


this.addEventListener('sync', function (event) {
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {

      console.log("Sincronizando tirinhas.json");

      if (event.tag == 'important') {
        this.registration.showNotification("Atualizando index");
        return cache.add('index.html');            
      }     
      this.registration.showNotification("Falha na atualização");

    }),
  );
  
});


this.addEventListener('periodicsync', (event) => {
  
  if (event.tag === 'important') {

      this.registration.showNotification("Sync periódico realizado com sucesso");

  }

});