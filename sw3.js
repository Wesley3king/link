var filesToAdd = ['./',
    './index.html',
    './css/style.css',
    './js/index.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('gefy-pwa')
      .then(function(cache) {
        return cache.add('./index.html');
      })
  );
});

//activate
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('gefy-')))
          .filter(cacheName => (cacheName !== CACHE_NAME))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});
        //fetch
        // adicinamos o listener do evento fetch
self.addEventListener('fetch', function(event) {
  // sempre que esse evento for disparado, responda da seguinte forma:
  event.respondWith(
    // verique se a nossa request existe e está online
    checkResponse(event.request)
      .catch(function() {
        // se não for encontrada procure no nosso cache se ela existe
        return returnFromCache(event.request)}
      ));
  // aguarde a resposta, quando ela existir adicione ao nosso cache
  event.waitUntil(addToCache(event.request));
});

// verifique se o response existe
var checkResponse = function(request) {
  return new Promise(function(fulfill, reject) {
    // tente resolver a promise fazendo o fetch (online)
    fetch(request)
      .then(function(response) {
        // verifica se o status retornado é diferente de 404
        if(response.status !== 404) {
          // se não foi 404, então achou algo!
          fulfill(response)
        } else {
          // não encontrou nada
          reject()
        }
      // fetch foi rejeitado, possívelmente está offline
      }, reject)
  });
};

// se o fetch foi rejeitado, vamos ao cache
var returnFromCache = function(request){
  // abra o cacha 'gefy-pwa'
  return caches.open('gefy-pwa')
    // a abertura retorna uma promise com o cache
    .then(function (cache) {
      // verifica se a request existe no nosso cache
      return cache.match(request)
        .then(function (matching) {
          // não encontrou nada
          if(!matching || matching.status == 404) {
            // redireciona pra página de offline
            // pode ser qualquer página que não precise de conexão.
            return cache.match('/404.html')
          } else {
            // retorna a request com o resultado do cache.
            return matching
          }
        });
    });
};

// tudo feito, vamos atualizar o cache
var addToCache = function(request) {
  // abra o cacha 'gefy-pwa'
  return caches.open('gefy-pwa')
    // a abertura retorna uma promise com o cache
    .then(function (cache) {
      // já sabemos que ele encontrou, entrou faz o fetch
      return fetch(request)
        .then(function (response) {
          // pega o retorno dessa request e adiciona no nosso cache
          return cache.put(request, response);
        });
    });
};