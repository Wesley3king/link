//prompt de instalação
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then((reg) => {
      console.log(`serviceWorker registrado ${serviceWorker}`);
    }).catch((e) => {
      console.log('falha! no SERVICEWORKER= ', e.message)
    })
  }
/** 
var myPrompt;
const pwaAlert = document.querySelector('#soulTaken');
const btnPWA = document.querySelector('#soul');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  myPrompt = e;
  pwaAlert.style.display="block";
});

btnPWA.addEventListener('click', () => {
  pwaAlert.style.display="none";
  myPrompt.prompt();
  console.log('pronto para instalar ' + e);
  myPrompt.userChoice
  .then( (choiceResult) => {
    if(choiceResult === 'accepted'){
      console.log('instalacao aceita');
    }else{
      console.log('instalacao negada/falhou');
    }
  });
});
**/