//prompt de instalação
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then((reg) => {
      console.log(`serviceWorker registrado ${serviceWorker}`);
    }).catch((e) => {
      console.log('falha! no SERVICEWORKER= ', e.message)
    })
  }