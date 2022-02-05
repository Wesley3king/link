//      LINK PROJECT by @KING.
const address = ['tsuki-ga-michibiku-isekai-douchuu','kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen','the-tutorial-tower-of-the-advanced-player','fukushuu-wo-koinegau-saikyou-yuusha-wa-yami-no-chikara-de-senmetsu-musou-suru','black-kanojo','black-clover','apocalyptic-super-system','hataraku-maou-sama','gods-reborn','imamade-ichido-mo-onnaatsukai-sareta-koto-ga-nai-onna-kishi-wo-onnaatsukai-suru-manga','is-there-an-empty-room','a-world-that-i-rule','kage-no-jitsuryokusha-ni-naritakute','koi-ka-mahou-ka-wakaranai','my-girlfriend-is-a-zombie-virus-girlfriend','my-yandere-girlfriend-wont-let-me-rest-in-peace','negai-o-kanaete-moraou-to-akuma-o-shoukan-shitakedo-kawaikattanode-kekkonshimashita-akuma-no-niidzuma','parallel-paradise','rakudai-kenja-no-gakuin-musou-nidome-no-tense-s-rank-cheat-majutsushi-boukenroku','reincarnated-as-an-aristocrat-with-an-appraisal-skill','tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito','strongest-hired-son-in-law','son-in-law-above-them-all','tsumi-to-kai','the-way-to-protect-the-female-lead-s-older-brother','rise-of-the-demon-king','uragirareta-s-rank-boukensha-no-ore-wa-ai-suru-dorei-no-kanojora-to-tomo-ni-dorei-dake-no-harem-guild-wo-tsukuru','tantei-wa-mou-shindeiru','kanojo-mo-kanojo','chainsaw-man','mahouka-koukou-no-rettousei-nyuugaku-hen','i-swear-that-i-love-you','jungle-juice','houkago-no-goumon-shoujo','koibito-wo-netorare-yuusha-party-kara-tsuihou-sa-retakedo-ex-skill-kotei-dameeji-ni-mezamete-muteki-no-sonzai-ni-saa-fukushuu-o-hajimeyou','naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka','my-wife-is-actually-the-emperor','a-pervert-s-daily-life-a-perverts-daily-life','solo-leveling','martial-peak','my-wife-is-a-demon-queen','the-beginning-after-the-end','kaifuku-jutsushi-yarinaoshi','building-owner','giselle-s-blood','i-the-strongest-demon-have-regained-my-youth','mushoku-tensei-isekai-ittara-honki-dasu','ouritsu-mahou-gakuen-no-saikasei-slum-agari-no-saikyou-mahoushi-kizoku-darake-no-gakuen-de-musou-suru','the-second-coming-of-gluttony','tokyo-ghoul','young-boss','wonderful-new-world','my-girlfriend-is-a-dragon','elf-who-likes-to-be-humiliated','i-m-really-not-the-demon-god-s-lackey','hari-dormitory','boarding-diary','prison-lab','two-households','tales-of-demons-and-gods','the-otome-game-s-bad-ending','seeking-the-flying-sword-path','maou-gun-saikyou-no-majutsushi-wa-ningen-datta'];

// impotador de json's
var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    //var status = xhr.status;
    if (xhr.status === 200) { 
      //Callback caso de tudo certo
      callback(null, xhr.response);
    } else {
      //Callback caso de algum erro
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

var allvar = [[],[],[],[],[],[],[],[],[]];
var dados = [];
function import_json () {
  //dados = [];
  for (let i in address){
  getJSON(`./dados/${address[i]}.json`, function(err, data) {
    if (err !== null) {
      console.log('erro ni importador' + err);
    } else {
      allvar[0].push(data.shortNAME);
      allvar[1].push(data.name);
      allvar[2].push(data.middleNAME);
      allvar[3].push(data.img);
      allvar[4].push(data.link);
      allvar[5].push(data.provLINK);
      allvar[6].push(data.prov);
      allvar[7].push(data.sinopse);
      allvar[8].push(data.cod)
    }
  });
 }
};
import_json();

function organizar () {
  for (let i in allvar[8]) {
    //console.log(i)
    let n = Number(i);
    let s = allvar[8].indexOf(n);
    let sub_data = [];
    sub_data.push(allvar[0][s]);
    sub_data.push(allvar[1][s]);
    sub_data.push(allvar[2][s]);
    sub_data.push(allvar[3][s]);
    sub_data.push(allvar[4][s]);
    sub_data.push(allvar[5][s]);
    sub_data.push(allvar[6][s]);
    sub_data.push(allvar[7][s]);

    dados.push(sub_data)
  }
}
console.log(dados);
  /*var prov;
  var provname;*/
  
  var di2 = [];
   var img2 = [];
   var caminho2 = './capas/'
   var capa2 = [null]
   var at2 = [];
   var at2 = [];
const lugar = window.document.querySelector('#my_way');
const local = window.document.querySelector('#pjct');
var hrs = window.document.createElement('hr');
var hr1 = window.document.createElement('hr');
var hr2 = window.document.createElement('hr');
hr2.setAttribute('class','mgtop');
var listmore = window.document.createElement('div');
var mainblock = [];
  var listd = [];
  var listi = [];
  var listp = [];
 
  var maisb = window.document.createElement('button');
  var classd = [];
  var classzone = window.document.createElement('div');
  classzone.setAttribute('id','areaclass');
  var classi = []
  var classp = []
var classmaindiv = window.document.createElement('section');
  classmaindiv.setAttribute('class','linec');
  var classdiv = window.document.createElement('div');
  classdiv.setAttribute('class','divclass');
  var marca2 = window.document.createElement('span');
  var category = [];
  var marcation = 0;
  var markank = 0;
  var alignsearch;
  var showarea = window.document.createElement('div');
  var clone = [];
  var alll_Active = null,cont = 1,num2 = 9,allnum = 0;
  //armazena o cabecalho
  var cabecalho = window.document.createElement('header');
  cabecalho.setAttribute('class','center');
  //menul o local de despejo do menu
   var menulc = window.document.createElement('div');
   //localiza onde está para o exit main menu
   var localizador,localizador2;
   
    //função do apresentar
     var maindv = window.document.createElement('div');
     var pdr = window.document.createElement('section');
     pdr.setAttribute('class','onekiss');
     var maindi = window.document.createElement('div');
     var mainp = window.document.createElement('h2');
 var mtd = {
   rnd: function () {
     let vlr;
     vlr = (Math.round(Math.random()*dados.length));
      console.log('vlr FINAL value = ' + vlr);
     return vlr;
   },
   mud: function () {
     maindv.style.animation=`trocar2 2s linear 1`;
     let slc = mtd.rnd();
     mainp.innerText = '';
     mainp.innerText = `${dados[slc][2]}`;
     mainp.setAttribute('class','tituloresponsivo');
     let mainmangaf = caminho2 + dados[slc][3];
     maindi.style.backgroundImage=`url(./${mainmangaf})`;
     maindi.setAttribute('class','imgr');
     maindv.setAttribute('id','principal');
     maindv.setAttribute('onclick',`subpage(${slc})`);
     
     maindv.appendChild(maindi);
     maindv.appendChild(mainp);
   },
   stt: function () {
     maindv.style.animation=`trocar1 2s linear 1`;
     setTimeout(mtd.mud, 2000);
   }
 }
    var timer = null;

 /*for (let i in allvar[2]) {
   console.log(`${allvar[0][i]} // ${allvar[1][i]} // ${allvar[2][i]} // ${allvar[3][i]} // ${allvar[4][i]}`);
   console.log(allvar[7][i])
 }*/

function home1(){
  lugar.style.background="#1c1c1c";
  localizador = 1;
  localizador2 = 3;
  console.log(document.body.clientWidth);
  category = [];
  local.appendChild(menulc);
  headandheart();
  //corpo do home
  pdr.appendChild(maindv);
  local.appendChild(pdr);
  mtd.mud();
  for(let i = 0; i < 3; i++){
    mainblock.push(window.document.createElement('div'));
  };
  //primeira div - lendo
  mainblock[0].setAttribute('id','read');
  var h3tit = window.document.createElement('h3');
  h3tit.innerHTML = 'reading';
  mainblock[0].appendChild(h3tit);
  mainblock[0].appendChild(hr1);
  
  var readingselected = [32,33,59,34,35,36,41,47,3];
  var readingh = window.document.createElement('h3');
  var readingd = [];
  var readingp = [];
  var readingi = [];
  for(let i in readingselected){
    readingd.push(window.document.createElement('div'));
    readingd[i].setAttribute('class','linem');
    readingi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + dados[readingselected[i]][3];
    readingi[i].style.backgroundImage=`url(${mainmangaf})`;
    readingi[i].setAttribute('class','imgclass');
    readingp.push(window.document.createElement('p'));
    readingp[i].setAttribute('class','csstxt');
    readingp[i].appendChild(window.document.createTextNode(dados[readingselected[i]][0]));

    readingd[i].appendChild(readingi[i]);
    readingd[i].appendChild(readingp[i]);
    readingd[i].setAttribute('onclick',`subpage(${readingselected[i]}, 0, 1, 2.4, 1)`);
    mainblock[0].appendChild(readingd[i]);
    
  };
  local.appendChild(mainblock[0]);
  //segunda div - my list
  mainblock[1].setAttribute('id','two');
  var listatit = window.document.createElement('h3');
  listatit.appendChild(window.document.createTextNode('my list'));
  mainblock[1].appendChild(listatit);
  mainblock[1].appendChild(hrs);
  for(let i = 0; i < 6;i++){
    listd.push(window.document.createElement('div'));
    listd[i].setAttribute('class','linem');
    listi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + dados[i][3];
    listi[i].style.backgroundImage=`url(./${mainmangaf})`;
    listi[i].setAttribute('class','imgclass');
    listp.push(window.document.createElement('p'));
    listp[i].setAttribute('class','csstxt');
    listp[i].appendChild(window.document.createTextNode(dados[i][0]));
    listd[i].appendChild(listi[i]);
    listd[i].appendChild(listp[i]);
    listd[i].setAttribute('onclick',`subpage(${i}, 0, 1, 5.1, 1)`);
    mainblock[1].appendChild(listd[i]);
  };
  
  
  maisb.setAttribute('onclick','alll()');
  maisb.innerHTML = 'show more';
  maisb.setAttribute('id','four');
  mainblock[1].appendChild(listmore);
  mainblock[1].appendChild(maisb);
  local.appendChild(mainblock[1]);
  if(alll_Active === 528){
    alll();
  }
  console.log('alll' + alll_Active);
  //terceira div classes
  var marca = window.document.createElement('span');
  marca.innerHTML = '>marcações';
  marca.setAttribute('class','mm');
  marca2.innerHTML = 'text';
  marca2.setAttribute('onclick','notas()');
  marca2.setAttribute('class','acionatxt');
  mainblock[2].appendChild(marca);
  mainblock[2].appendChild(marca2);
  mainblock[2].appendChild(window.document.createElement('hr'));
  for(let i = 0; i < 3; i++){
    classd.push(window.document.createElement('div'));
    classd[i].setAttribute('class','ordem');
    classi.push(window.document.createElement('img'));
    classi[i].setAttribute('class','categ');
    classi[i].setAttribute('alt','classes');
    classp.push(window.document.createElement('p'));
    if(marcation === 0 && i === 0 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','./img-conf/red-clock.png');
      classp[i].innerHTML = 'my file';
      classd[i].setAttribute('onclick','class1()');
    }else if(marcation === 0 && i === 1 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','./img-conf/coffee.png');
      classp[i].innerHTML = 'specials';
        classd[i].setAttribute('onclick','class2()');
    }else if(marcation === 0 && i === 2 && markank != 1 && markank != 3){
      classi[i].setAttribute('src','./img-conf/lightgreen-terminal.png');
      classp[i].innerHTML = 'finalized';
        classd[i].setAttribute('onclick','class3()');
    }else if(marcation === 1 || markank === 1){
      classd[0].setAttribute('onclick','eliminar()');
    classd[0].setAttribute('class','ordemnow');
    }else if(marcation === 3 && i === 2 && markank === 3){
      classd[2].setAttribute('onclick','eliminar()');
      classd[2].setAttribute('class','ordemnow');
    }
    
  classd[i].appendChild(classi[i]);
  classd[i].appendChild(classp[i]);
  
  classmaindiv.appendChild(classd[i]);
  };
  mainblock[2].appendChild(classmaindiv);
  mainblock[2].appendChild(classzone);
  mainblock[2].appendChild(classdiv);
  mainblock[2].appendChild(window.document.createElement('hr'));
  mainblock[2].setAttribute('id','eight');
  local.appendChild(mainblock[2]);
  //rodape 
  var par = window.document.createElement('p');
  var ll = [];
  par.setAttribute('class','pv');
  par.appendChild(window.document.createTextNode(' provedores:'));
  var linkp = [];
  var linkdd = window.document.createElement('nav');
  linkdd.appendChild(par);
  
  for(let i = 0;i < 4; i++){
    linkp.push(window.document.createElement('a'));
    linkp[i].innerHTML = '>';
    linkp[i].setAttribute('class','pvlink');
    linkp[i].innerHTML += ` ${allvar[6][i]}`;
    linkp[i].setAttribute('href', allvar[5][i]);
    linkp[i].setAttribute('target','_blank');
    linkp[i].setAttribute('class','nounder');
    linkp[i].setAttribute('rel','nofollow');
    linkdd.appendChild(linkp[i]);
    if(i !== 3){
      linkdd.appendChild(window.document.createElement('br'));
    }
  };
  var rr = window.document.createElement('footer');
  rr.appendChild(linkdd);
  var sma = window.document.createElement('p');
  sma.innerHTML = 'created by: &copy; king';
  sma.setAttribute('class','ult');
  rr.appendChild(sma);
  local.appendChild(rr);
  alignsearch = null;
};
var init = setTimeout(()=> {
  if (allvar[0][1] !== undefined){
    organizar();
    home1();
  }else {
    console.log('failed')
  }
}, 1000)

//funcao cabecalho
function headandheart() {
  cabecalho.innerHTML = '';
  cabecalho.setAttribute('class','center brt');
  let dr = [];
  for(let i = 0;i < 3;i++){
  dr.push(window.document.createElement('article'));
  }
  let menuimage1 = window.document.createElement('img');
  let menuimage2 = window.document.createElement('img');
  let titulo = window.document.createElement('h1');
  titulo.setAttribute('class','titulo1')
  let bspan = window.document.createElement('span');
  
  bspan.setAttribute('class','menor')
  titulo.appendChild(window.document.createTextNode('.link'));
  bspan.appendChild(window.document.createTextNode('mangás'));
  titulo.appendChild(bspan);
  
  menuimage1.setAttribute('src','./img-conf/menuwhite.png');
  menuimage1.setAttribute('alt','menuchoose');
  menuimage1.setAttribute('class','tamj');
  menuimage1.setAttribute('onclick','menu()');
  dr[0].appendChild(menuimage1);
  
  dr[1].appendChild(titulo);
  
  menuimage2.setAttribute('src','./img-conf/lupa.png');
  menuimage2.setAttribute('alt','procurar');
  menuimage2.setAttribute('class','tamanhoh2');
  menuimage2.setAttribute('onclick','search()');
  dr[2].appendChild(menuimage2);
  for(let i in dr){
    if(i == 1){
      dr[i].setAttribute('class','cabeca margen2');
    }else if(i > 0){
      dr[i].setAttribute('class','cabeca margen');
    }else{
    dr[i].setAttribute('class','cabeca lef');
    }
    cabecalho.appendChild(dr[i]);
  }
  console.log('localizador1 = ' + localizador)
  if(localizador === 1){
  local.appendChild(cabecalho);
  }
  timer = setInterval(mtd.stt, 7000);
}

    function alll(){
      maisb.setAttribute('onclick','restart()');
      maisb.innerHTML = 'close';
      alll_Active = 528;
      console.log('alll ativado!')
      listmore.innerText = '';
    for(let i = 6; i < dados.length;i++){
    listd.push(window.document.createElement('div'));
    listd[i].setAttribute('class','linem');
    listi.push(window.document.createElement('div'));
    let mainmangaf = caminho2 + dados[i][3];
    listi[i].style.backgroundImage=`url(${mainmangaf})`;
    listi[i].setAttribute('class','imgclass');
    //listi[i].setAttribute('alt','capa do manga');
    listp.push(window.document.createElement('p'));
    listp[i].setAttribute('class','csstxt');
    listp[i].appendChild(window.document.createTextNode(dados[i][0]));
    
    listd[i].appendChild(listi[i]);
    listd[i].appendChild(listp[i]);
    listd[i].setAttribute('onclick',`subpage(${i}, 0, 7,${i}, 2)`);
    listmore.appendChild(listd[i]);
  }
    }
  
  function restart(){
    listmore.innerHTML = '';
    listd.splice(6, allvar[0].length);
    listi.splice(6, allvar[0].length);
    listp.splice(6, allvar[0].length);
    maisb.setAttribute('onclick','alll()');
    maisb.innerHTML = 'show more';
    alll_Active = null;
    window.scrollTo(830, 830);
  };
  
  
  function class1(){
    classdiv.innerText = '';
    classdiv.setAttribute('class','linec');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    classdiv.setAttribute('class','linec');
    var oneclass = [38,40];
    var oned = [];
    var onei = [];
    var onep = [];
    
    for(let i in oneclass){
      oned.push(window.document.createElement('div'));
      oned[i].setAttribute('class','linem');
      onei.push(window.document.createElement('div'));
      let mainmangaf = caminho2 + dados[oneclass[i]][3];
      onei[i].style.backgroundImage=`url(${mainmangaf})`;
      onei[i].setAttribute('class','imgclass');
      onep.push(window.document.createElement('p'));
      onep[i].appendChild(window.document.createTextNode(dados[oneclass[i]][0]));
      onep[i].setAttribute('class','csstxt');
      
      oned[i].appendChild(onei[i]);
      oned[i].appendChild(onep[i]);
      oned[i].setAttribute('onclick',`subpage(${oneclass[i]}, 123, 1, ${i}, 3)`);
      classdiv.appendChild(oned[i]);
    };
    classd[0].setAttribute('onclick','eliminar()');
    classd[0].setAttribute('class','ordemnow');
    marcation = 1;
    markank = 1;
  }
  var senha;
  var senhago;
  var falha;
  function class2(){
    classdiv.innerText = '';
    classd[1].setAttribute('class','ordemnow');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    senha = window.document.createElement('input');
    senha.setAttribute('id','kest');
    senha.setAttribute('type','password');
    senha.setAttribute('class','space');
    senhago = window.document.createElement('button');
    senhago.setAttribute('class','space'),
    senhago.setAttribute('id','spaceleft');
    senhago.setAttribute('onclick','mainki()');
    falha = window.document.createElement('p');
    senhago.appendChild(window.document.createTextNode('verifi'));
    classdiv.setAttribute('class','kente');
    classdiv.appendChild(senha);
    classdiv.appendChild(senhago);
    classdiv.appendChild(falha);
    classd[1].setAttribute('onclick','redirect(2)');
   
  };
  
  function mainki(){
    
    if(falha.value !== 'senha incorreta!'){
        falha.innerHTML = 'senha incorreta!';
        falha.style.color="red";
    }
    if(senha.value === '@king'){
    class2check();
    }
  }
  
  function class2check(){
    classdiv.innerHTML = '';
    classdiv.setAttribute('class','linec');
    let proxi = window.document.createElement('div');
    proxi.innerText = 'undefined';
    proxi.setAttribute('class','nxt');
    let agoravai = window.document.createElement('a');
    agoravai.setAttribute('href','./capash/hent.html');
    agoravai.setAttribute('target','_blank');
    agoravai.setAttribute('rel','next');
    agoravai.style.textDecoration="none";
    agoravai.appendChild(proxi);
    classdiv.appendChild(agoravai);
  classd[1].setAttribute('onclick','redirect(2)');
  classd[1].setAttribute('class','ordemnow');
  };
  function class3(){
   classdiv.innerText = '';
   classdiv.setAttribute('class','linec');
   classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()'),
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
   var numclass = [31,55,8];
   var animd = [];
   var animi = [];
   var animp = [];
   for(let i in numclass){
   animd.push(window.document.createElement('div'));
   animd[i].setAttribute('class','linem');
   animi.push(window.document.createElement('div'));
   let mainmangaf = caminho2 + dados[numclass[i]][3];
   animi[i].style.backgroundImage=`url(${mainmangaf})`;
   animi[i].setAttribute('class','imgclass');
   animp.push(window.document.createElement('p'));
   animp[i].appendChild(window.document.createTextNode(dados[numclass[i]][0]));
   animp[i].setAttribute('class','csstxt');
   
   animd[i].appendChild(animi[i]);
   animd[i].appendChild(animp[i]);
   animd[i].setAttribute('onclick',`subpage(${numclass[i]}, 123, 1, ${i}, 3)`);
   classdiv.appendChild(animd[i])
   };
   classd[2].setAttribute('onclick','redirect(2)');
   classd[2].setAttribute('class','ordemnow');
   marcation = 2;
   markank = 3;
   console.log(`${marcation} | class3 fun`);
  }
  //funcao lembrete
  var lemb = ['majo to ryouken: estreia dia 21/outubro'];
 function notas(){
   classdiv.innerText = '';
   classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    for(var z in lemb){
      classdiv.innerHTML += `》notas: <br> >${lemb[z]}<br>`;
      classdiv.setAttribute('class','eletronic');
      marca2.setAttribute('onclick','redirect(2)');
    };
 };
  //remover as classes
  function eliminar(){
    classdiv.innerText = ''
    marcation = 0
    markank = 0
    classdiv.setAttribute('class','linec')
    classd[0].setAttribute('onclick','class1()')
    classd[0].setAttribute('class','ordem')
    classd[1].setAttribute('onclick','class2()')
    classd[1].setAttribute('class','ordem')
    classd[2].setAttribute('onclick','class3()')
    classd[2].setAttribute('class','ordem')
    marca2.setAttribute('onclick','notas()')
  }
 
  //funcao de peaquisa

  var contar;
  var allask;
  
 function search(){
   local.innerHTML = '';
   clearInterval(timer);
   //localizador = 2;
   alignsearch = window.document.createElement('div');
  
   allask = window.document.createElement('div');
    let ut = window.document.createElement('input');
  let bse = window.document.createElement('article');
  let own = window.document.createElement('img');
  let exit = window.document.createElement('img');
  let dexit = window.document.createElement('article');
  let cat = window.document.createElement('article');
  let cati = window.document.createElement('img');
  cati.setAttribute('src','./img-conf/iconc.png');
  cati.setAttribute('alt','classes');
  cati.setAttribute('class','pixelsimg');

  
 ut.setAttribute('id','sank');
  allask.setAttribute('id','ohmt');
  
  dexit.setAttribute('onclick','redirect(3)');
  cat.setAttribute('onclick','searclass()');
  cat.setAttribute('class','inze3');
  
  exit.setAttribute('src','./img-conf/sair.png');
  exit.setAttribute('width','14px');
  exit.setAttribute('height','15px');
  
  own.setAttribute('src','./img-conf/lupa-black.png');
  own.setAttribute('width','13px');
  own.setAttribute('height','13px');
  own.setAttribute('alt','search.png');
  bse.setAttribute('onclick','mostar(1)');
  ut.setAttribute('type','search');
  ut.setAttribute('onkeypress','mostar(1)');
  bse.setAttribute('class','inze2');
  dexit.setAttribute('class','inze3');
  ut.setAttribute('class','inazumaeleven')
  dexit.style.padding="1px";
  bse.style.padding="1px";
  
   bse.appendChild(own);
   dexit.appendChild(exit);
   alignsearch.appendChild(dexit);
   alignsearch.appendChild(ut);
   alignsearch.appendChild(bse);
   cat.appendChild(cati);
   alignsearch.appendChild(cat);
   allask.appendChild(alignsearch);
   local.appendChild(allask);
   allask.style.background="rgb(47,47,47)";
   lugar.style.background="rgb(47,47,47)";
   window.scrollTo(0, 0);
   if(num2 === 2){
     again();
   }
   cabecalho.innerHTML = '';
 }
 
 function mostar(conts){
   showarea.innerHTML = '';
    var listone = [];
 var numlist = [];
 var res = [];
 var verifi = 0;
 
 let divv = [];
 let linkaa = [];
 let par = [];
 let imgg = [];
   num2 = 2;
 showarea.appendChild(window.document.createElement('hr'));
  allask.appendChild(showarea);
   for(let e = 0; e <dados.length; e++){
     var valor = String(window.document.querySelector('#sank').value.toLowerCase());
     console.log(`valor === ${ valor} / dados === ${dados[e][1]}`)
     if(dados[e][1].indexOf(valor) != -1){
       numlist.push(e);
       clone.push(e);
       listone.push(dados[e][2]);
       verifi++;
     }
   }
     if(verifi === 0){
      var ppp = window.document.createElement('p');
      ppp.appendChild(window.document.createTextNode('nothing to show'));
      showarea.appendChild(ppp);
    }
    
    // for pra divs
   for(let gg in listone){
     divv.push(window.document.createElement('div'));
     divv[gg].setAttribute('class','linems');
     par.push(window.document.createElement('p'));
     par[gg].setAttribute('class','csstxt');
     imgg.push(window.document.createElement('div'));
     res = caminho2 + dados[numlist[gg]][3];
     imgg[gg].style.backgroundImage=`url(${res})`;
     imgg[gg].setAttribute('class','bigimg');
     
     divv[gg].appendChild(imgg[gg]);
     par[gg].appendChild(window.document.createTextNode(dados[numlist[gg]][2]));
     divv[gg].setAttribute('onclick',`subpage(${numlist[gg]},0, 4, ${gg}, 4)`);
     divv[gg].appendChild(par[gg]);
     showarea.appendChild(divv[gg]);
   };
   var kali = window.document.createElement('div');
   kali.setAttribute('onclick','redirect(3)');
   kali.innerText = 'x';
   kali.setAttribute('class','allcenter');
   showarea.appendChild(window.document.createElement('p'));
   showarea.appendChild(kali);
   };
 //repete o resultado pesquisa
 
 function again() {
    console.log('again executado');
   let divv = [];
 let par = [];
 let imgg = [];
   allask.appendChild(showarea);
 }
 //funcao cabecalho do subpage
 function subhead(ls=0,tpp=0,wSv=0) {
   cabecalho.setAttribute('id','rst');
   cabecalho.removeAttribute('class','brt')
   let menuint = window.document.createElement('header');
   menuint.setAttribute('class','center brt');
   let menud = [];
   
   let menuinti = window.document.createElement('img');
   menuinti.setAttribute('src','./img-conf/menuwhite.png');
   menuinti.setAttribute('alt','poster de fundo');
   menuinti.setAttribute('class','tamj');
   menuinti.setAttribute('onclick',`menu(999, ${ls}, ${wSv}, ${tpp})`);
   let menuinti2 = window.document.createElement('img');
   let menuinth = window.document.createElement('h1');
   menuinth.setAttribute('class','titulo1');
   let spa = window.document.createElement('span');
   menuinth.innerHTML = '.link';
   spa.innerHTML = 'mangás';
   spa.setAttribute('class','menor');
   menuinti2.setAttribute('src','./img-conf/doble-arrow.png');
  menuinti2.setAttribute('alt','return');
  //redirecionamento/ voltar
  console.log(ls + ' ###');
  if(ls === 0){
    menuinti2.setAttribute('onclick',`redirect(11, ${tpp}, ${wSv})`);
  }else if(ls === 3){
    menuinti2.setAttribute('onclick',`redirect(6, ${tpp}, ${wSv})`);
  }else if(ls === 4){
    menuinti2.setAttribute('onclick',`redirect(4, ${tpp}, ${wSv})`);
    //volta do subpage ao search
  }else if(ls === 5){
    menuinti2.setAttribute('onclick',`redirect(7, ${tpp},${wSv})`);
  }else if(ls === 6){
    menuinti2.setAttribute('onclick',`redirect(1, ${tpp},${wSv})`);
  }else if(ls === 7){
    menuinti2.setAttribute('onclick',`redirect(11, ${tpp},${wSv})`);
  }else{
    menuinti2.setAttribute('onclick',`redirect(1, ${tpp},${wSv})`);
  };
  
  menuinti2.setAttribute('class','tamanhoh2');
  for(let i = 0;i < 3; i++){
     menud.push(window.document.createElement('div'));
     if(i == 1){
      menud[i].setAttribute('class','cabeca margen2');
       menuinth.appendChild(spa);
       menud[i].appendChild(menuinth);
       menuint.appendChild(menud[i]);
    }else if(i > 0){
      menud[i].setAttribute('class','cabeca margen');
      menud[i].appendChild(menuinti2);
       menuint.appendChild(menud[i]);
       
    }else{
    menud[i].setAttribute('class','cabeca lef');
    menud[i].appendChild(menuinti);
    menuint.appendChild(menud[i]);
    };
   };
  cabecalho.appendChild(menuint);
  if(localizador === 7){
  local.appendChild(cabecalho);
  }
  menulc.innerHTML = '';
  
 }
 // pagina de exibição - vdst = window scroll value /tdsw = tipo do switch
 var alivar;
 var lugarposter = window.document.createElement('div');
 
 function subpage(x, v=0, lsi, vdst, tdsw){
   local.innerHTML = '';
   cabecalho.innerHTML = '';
   clearInterval(timer);
   localizador = 7;
   localizador2 = 6;
   lugar.style.background="#1c1c1c";
   category = [];
   subhead(lsi,tdsw,vdst);
   local.appendChild(menulc);
  window.scrollTo(0, 0);
  //fim do menu, inicio da mostra
  
 let fontlink = window.document.createElement('a');
 let fontspan = window.document.createElement('span');
 let fontp = window.document.createElement('p');
 let Scp = window.document.createElement('div');
 Scp.setAttribute('onclick',`Capa1(${x})`);
 Scp.setAttribute('class','Hello');
 let tagmain = window.document.createElement('main');
 tagmain.setAttribute('id','neck');
 
 tagmain.style.background=`url(./capas/${dados[x][3]})`;
 tagmain.style.backgroundSize="100%";
 tagmain.style.backgroundRepeat="no-repeat";
 tagmain.setAttribute('class','titulo mgtop2');
 let divdei = window.document.createElement('div');
 divdei.setAttribute('id','divimg');
 fontp.innerHTML = 'font: ';
 fontspan.appendChild(window.document.createTextNode(dados[x][6]));
 fontlink.setAttribute('target','_blank');
 fontlink.setAttribute('rel','nofollow');
 fontlink.setAttribute('href',dados[x][5]);
 fontlink.setAttribute('class','nound');
 let div1 = window.document.createElement('div');
 
 let img5 = './capas/' + dados[x][3];
 lugarposter.style.backgroundImage=`url(${img5})`;
 lugarposter.style.backgroundSize="100% 100%";
 lugarposter.setAttribute('class','imgtam');
 div1.setAttribute('class','imgcenter');
 
 div1.appendChild(Scp);
 div1.appendChild(lugarposter);
 divdei.appendChild(div1);
 tagmain.appendChild(divdei);
 local.appendChild(tagmain);
 
 fontlink.appendChild(fontspan);
 fontp.appendChild(fontlink);
 // ancoragem dos sites
 let golink = window.document.createElement('a');
 golink.setAttribute('href', dados[x][4]);
 golink.setAttribute('target','_blank');
 golink.setAttribute('rel','nofollow');
 golink.setAttribute('class','nound col');
 let gop = window.document.createElement('p');

 let gospan = window.document.createElement('span');
 let godiv = window.document.createElement('div');
 let tagimg = window.document.createElement('img');
 tagimg.setAttribute('src','./img-conf/literature.png');
  gop.setAttribute('class','titulo2');
 gop.setAttribute('id','ler');
 tagimg.setAttribute('alt','icone don livro');
 tagimg.setAttribute('width','26px');
 tagimg.setAttribute('hight','26px');
 tagimg.setAttribute('class','titulo2');
 godiv.setAttribute('id','three');
 
 gop.appendChild(window.document.createTextNode(' ler agora!'));

 godiv.appendChild(tagimg);
 godiv.appendChild(gop);
 golink.appendChild(godiv);
 
 let namem = window.document.createElement('h2');
 namem.appendChild(window.document.createTextNode(dados[x][1]));
 namem.setAttribute('class','stars');
 
 namem.style.marginTop="2px";
 namem.style.marginBottom="30px";
 let alinha_width = window.document.createElement('div');
 alinha_width.setAttribute('class','sub_align');
 alinha_width.appendChild(namem);
 alinha_width.appendChild(golink);
 local.appendChild(alinha_width);
 fontp.setAttribute('class','fontali');
 local.appendChild(fontp);
  // funcao da sinopse
 var par = window.document.createElement('p');
 var bold = window.document.createElement('strong');
 var sinos= window.document.createElement('section');
 bold.appendChild(window.document.createTextNode('sinopse: '));
 par.appendChild(bold);
 par.appendChild(window.document.createTextNode(dados[x][7]));
 colortxt();
 sinos.appendChild(par);
 sinos.setAttribute('class','subsin');
 local.appendChild(sinos);
 dacategoria(x);
 for(let w in category){
 local.appendChild(category[w]);
 }
}
 //color da sombra do poster
 function colortxt() {
   let aleatorio = Math.round(Math.random()*10);
   switch (aleatorio) {
     case 1:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,23,128)";
       //light pink
       break
     case 2:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,50,50)";
       //red
       break
     case 3:
       lugarposter.style.boxShadow="2px 2px 3px rgb(23,255,226)";
     // baby green
       break
     case 4:
       lugarposter.style.boxShadow="2px 2px 3px rgb(23,255,57)";
     //lime
       break
     case 5:
     lugarposter.style.boxShadow="2px 2px 3px rgb(171,102,223)";
     //light purple
       break
     case 6:
       lugarposter.style.boxShadow="2px 2px 3px rgb(147,66,255)";
     //purple
       break
     case 7:
       lugarposter.style.boxShadow="2px 2px 3px rgb(18,25,255)";
     // dark blue
       break
     case 8:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,246,23)";
     //yellow
       break
     case 9:
       lugarposter.style.boxShadow="2px 2px 3px rgb(52,206,255)";
     //light blue
       break
     case 10:
       lugarposter.style.boxShadow="2px 2px 3px rgb(255,40,95)";
     //rose red
       break
     default:
     lugarposter.style.boxShadow="2px 2px 3px rgb(48,212,102)";
     //green
     break
   }
 };
 
 //categorias dos mangas
 const MATRIZclass = [[3,10,25],[0,10,19,23],[0,10,25],[0,7,8,10],[20,23,24],[0,4,10,16,25],[0,3,7,14,25,27],[4,6,23,25],[0,3,10,27,30,],[4,10,23],[1,11,12,23,24],[1,3,7,10,11,24,30],[0,2,3,4,8,10,11,24],[4,9,11,16,25],[0,11,18,23,30],[4,23,27],[4,6,8,10,23,25,27],[5,8,10,11,24,28],[0,3,10,16,25,27],[3,10],[0,3,10,15],[0,2,3,4,8,10,11,12,23],[7,10,23,25,27],[1,7,8,9,22,24],[6,7,10,11,15,16,18,22,23,30],[0,2,3,4,10,17,30],[0,1,3,8,11,23],[0,4,7,9,19,20,21,23,24],[1,4,8,9,11,23,25,26],[0,7,14,25,27],[16,23,25,27,29],[4,23],[0,10,14,24,27],[4,8,11,29],[8,10,11,12,16,24],[0,10,23],[0,2,3,4,10,13,15,17,23,25,27,30],[4,8,23,24,26],[0,3,10],[0,2,3,4,10,11,13,23,27],[3,10,23,25],[0,2,3,7,10,16,23,30],[1,8,10,12],[1,7,12],[1,7,8,10,12,13,23,31,32,33],[1,4,8,10,12,16,25,27,30],[7,10,16,24],[0,3,6,7,9,10,11,16,20,23,24],[0,3,10,16,24,27,30],[0,7,14,20,22,24,27,],[1,7,8,12,23,24,26,30],[1,7,8,11,12,23,24],[1,4,8,10,11,12,23,25],[1,8,12],[0,3,4,10,14,20,25,27],[4,8,12,23,24],[1,7,8,9,12,23,24,26],[14,22],[1,7,12,23],[2,3,25,27,30],[7,11,13,15,23],[0,2,3,10,23],[3,7,11,23]];
 const NAMEofCLASS = [`Ação`,`Adulto`,`Artes marciais`,`Aventura`,`Comédia`,`Crossdressing`,`Demônios`,`Drama`,`Ecchi`,`Escolar`,`Fantasia`,`Harém`,`Hentai`,`Histórico`,`Horror`,`Isekai`,`Magia`,`Manhua`,`Manhwa`,`Militar`,`Mistério`,`Policial`,`Psicológico`,`Romance`,`Seinen`,`Shounen`,`Slice of life`,`Sobrenatural`,`Viagem temporal`,`Vida escolar`,`Webtoon`,`Josei`,`Shoujo`,`Vampiros`];

 function dacategoria(vv){
   for(let i in MATRIZclass[vv]){
     let spp = window.document.createElement('span');
     let parr = window.document.createElement('p');
     spp.setAttribute('class','srate');
     spp.setAttribute('onclick',`ccmm(MATRIZclass[${vv}][${i}], ${vv}, 000,${vv})`);
     parr.setAttribute('class','sratetxt');
     parr.appendChild(window.document.createTextNode(NAMEofCLASS[MATRIZclass[vv][i]]));
     let wdt;
     if(NAMEofCLASS[MATRIZclass[vv][i]].length <= 5){
       wdt = NAMEofCLASS[MATRIZclass[vv][i]].length * 12;
     }else if(NAMEofCLASS[MATRIZclass[vv][i]].length <= 8){
       wdt = NAMEofCLASS[MATRIZclass[vv][i]].length * 11;
     }else{
       wdt = NAMEofCLASS[MATRIZclass[vv][i]].length * 9;
     };
          spp.style.width=`${wdt}px`;
     
     spp.appendChild(parr);
     category.push(spp);
   };
 };
 //funcao de mostrar a capa
 var maincapa;
 var maincpx;
 var maind; 
 
 function Capa1(z) {
   maincapa = window.document.createElement('img');
   maincpx = window.document.createElement('img');
   
   maincpx.setAttribute('src', './img-conf/xx.png');
   maincpx.setAttribute('alt','exit');
   maincpx.setAttribute('id','embreve');
   maind = window.document.createElement('div');
   maind.setAttribute('class','Shownow');
   let vacp = caminho2 + dados[z][3];
   maincapa.setAttribute('src', vacp);
   maincapa.setAttribute('alt','Poster');
   maincapa.setAttribute('class','Showhour');
   maincpx.setAttribute('onclick','NoCapa(this, maincapa, maind)');
   
   maind.appendChild(maincapa);
   maind.appendChild(maincpx);
   cabecalho.appendChild(maind);
   console.log('capa function executed')
 }
 
 function NoCapa(mui, doi, her) {
   mui.remove();
   doi.remove();
   her.remove();
 }
 //funcao de classe search
 
 function searclass() {
   clearInterval(timer);
   local.innerText = '';
   let sectm = window.document.createElement('header');
   sectm.setAttribute('class','anti')
   let vouv = window.document.createElement('img');
   let vvdd = window.document.createElement('div');
   vvdd.setAttribute('onclick','redirect(5)');
   vvdd.setAttribute('class','inazuma zed');
   vouv.setAttribute('src','./img-conf/doble-arrow.png');
   vouv.setAttribute('class','confm');
   vouv.setAttribute('alt','return');
   let vouh = window.document.createElement('img');
   vouh.setAttribute('src','./img-conf/homeimg.png');
   vouh.setAttribute('class','confml');
   vouh.setAttribute('alt','return to home');
   let vouvd = window.document.createElement('div');
   vouvd.setAttribute('onclick','search()');
   vouvd.setAttribute('class','inazuma ct');
   
   let nomedad = window.document.createElement('div');
   let nomedac = window.document.createElement('p');
   nomedad.setAttribute('class','inazuma');
   nomedad.setAttribute('id','nomes');
   nomedac.innerHTML = `classes`;
   
   vouvd.appendChild(vouv);
   local.appendChild(vouvd);
   nomedad.appendChild(nomedac);
   sectm.appendChild(nomedad);
   vvdd.appendChild(vouh);
   sectm.appendChild(vvdd);
   sectm.appendChild(window.document.createElement('hr'));
   local.appendChild(sectm);
   //seleção de classe
   let dvc = [];
   let prc = [];
   for(let i in NAMEofCLASS){
     dvc.push(window.document.createElement('section'));
     dvc[i].setAttribute('onclick',`ccmm(${i})`);
       dvc[i].setAttribute('class','intc');
     prc.push(window.document.createElement('p'));
     dvc[i].appendChild(window.document.createTextNode(NAMEofCLASS[i]));
     local.appendChild(dvc[i]);
   }
   let rod = window.document.createElement('footer');
   rod.setAttribute('class','rdp')
   let rodts = window.document.createElement('p');
   rodts.setAttribute('class','footc');
   rodts.innerHTML = '<h3 class="inazuma">.link</h3><small class="inazuma">mangás</small><br><span class="ult">created by: @king</span>';
   
   rod.appendChild(rodts);
   local.appendChild(rod);
 };
 // classe mostra/mangas
 var result;
 //vrs,bootreturn,mngn,mmll variaveis de retorno ao subpage
 var bootreturn;
 var mmll = null;
 function ccmm(sld,tq=null,vrs=null,mngn=null) {
   local.innerHTML = '';
   result = sld;
   window.scrollTo(0,0);
   //menu de mostra para as classes
   let sectm = window.document.createElement('header');
   sectm.setAttribute('class','anti')
   let vouv = window.document.createElement('img');
   let vvdd = window.document.createElement('div');
   vvdd.setAttribute('onclick','redirect(5)');
   vvdd.setAttribute('class','inazuma zed');
   vouv.setAttribute('src','./img-conf/doble-arrow.png');
   vouv.setAttribute('class','confm');
   vouv.setAttribute('alt','return');
   let vouh = window.document.createElement('img');
   vouh.setAttribute('src','./img-conf/homeimg.png');
   vouh.setAttribute('class','confml');
   vouh.setAttribute('alt','return to home');
   let vouvd = window.document.createElement('div');
   //testa para voltar a clas/subp
   if (vrs === 000) {
     bootreturn = vrs;
     mmll = mngn;
   }
   console.log(`${bootreturn}|| ${mmll}`)
   if(bootreturn === 000 && mmll !== null) {
   vouvd.setAttribute('onclick',`subpage(${mmll}, 000)`);
   }else if(tq !== null){
   vouvd.setAttribute('onclick',`subpage(${tq})`);
   }else{
   vouvd.setAttribute('onclick','searclass()');
   };
   vouvd.setAttribute('class','inazuma ct');
   
   let nomedad = window.document.createElement('div');
   let nomedac = window.document.createElement('p');
   nomedad.setAttribute('class','inazuma');
   nomedad.setAttribute('id','nomes');
   nomedac.innerHTML = `classe: ${NAMEofCLASS[sld]}`;
   
   vouvd.appendChild(vouv);
   local.appendChild(vouvd);
   nomedad.appendChild(nomedac);
   sectm.appendChild(nomedad);
   vvdd.appendChild(vouh);
   sectm.appendChild(vvdd);
   sectm.appendChild(window.document.createElement('hr'));
   local.appendChild(sectm);
   //fim do menu
   let exts = window.document.createElement('div');
       exts.setAttribute('class','linec');
       let spy = 0;
   for(let i in MATRIZclass){
     if(MATRIZclass[i].indexOf(sld) !== -1){
       let resultd = window.document.createElement('div');
       resultd.setAttribute('class','linems');
       resultd.setAttribute('onclick',`subpage(${i}, 0, 3, ${++spy}, 5)`);
       let resulti = window.document.createElement('div');
       let worst = caminho2 + dados[i][3];
       resulti.style.backgroundImage=`url(${worst})`
       resulti.setAttribute('class','bigimg');
       let resultp = window.document.createElement('p');
       resultp.appendChild(window.document.createTextNode(dados[i][2]));
       resultp.setAttribute('class','csstxt');
       
       resultd.appendChild(resulti);
       resultd.appendChild(resultp);
       exts.appendChild(resultd);
     };
   };
   local.appendChild(exts);
   let rod = window.document.createElement('footer');
   rod.setAttribute('class','rdp')
   let rodts = window.document.createElement('p');
   rodts.setAttribute('class','footc');
   rodts.innerHTML = '<h3 class="inazuma">.link</h3><small class="inazuma">mangás</small><br><span class="ult">created by: @king</span>';
   
   rod.appendChild(rodts); 
   local.appendChild(rod);
   //scroll de retorno /poo/
   
 };
 //testando o main menu
   
   var selct = [['Favorites','Anime list','Class','Search','Downloads','Coming soon','install','Settings','Home','go out'],['soon','soon','searclass()','search()','soon','soon','insll()','soon','redirect(10)','redirect(12)'],['favorite.png','playmenu.png','classmenu.png','lupa.png','download.png','lua.png','instal.png',`tools.png`,'homeimg.png','power.png']];
   var menul = null;
   function menu(zsh=0,vls=0, vRp, Tsc) {
     localizador = 3;
     clearInterval(timer);
     //remover o header
     cabecalho.innerHTML = '';
     
  if(zsh === 999){
    menul = window.document.createElement('div');
   menul.setAttribute('class','sub_maindivmenu');
  }else if(menul === null) {
   menul = window.document.createElement('div');
   menul.setAttribute('class','maindivmenu');
  }
  //emblema e voltar
  let ctxt = '.link';
  let mang = 'mangás';
  let read = window.document.createElement('span');
  read.appendChild(window.document.createTextNode(mang));
  let pronto = window.document.createElement('h1');
  pronto.innerHTML = ctxt;
  read.setAttribute('class','sublogo');
  pronto.appendChild(read);
  pronto.setAttribute('class','logo inazuma');
  menul.appendChild(pronto);
  //for de opcoes
     for(let i in selct[0]){
       let armz = window.document.createElement('div');
       let dm = window.document.createElement('p');
       let imag = window.document.createElement('img');
       imag.setAttribute('src',`./img-conf/${selct[2][i]}`)
       imag.setAttribute('alt','option')
       imag.setAttribute('class','miniatura inazuma')
       dm.appendChild(window.document.createTextNode(selct[0][i]));
       dm.setAttribute('class','mutx inazuma');
       armz.setAttribute('class','stylem');
         armz.setAttribute('onclick',`${selct[1][i]}`);
      
       armz.appendChild(imag);
       armz.appendChild(dm);
       menul.appendChild(armz);
      }
     //letras do criador
     let sm = window.document.createElement('small');
     sm.innerHTML = `created by: @king`;
     sm.setAttribute('class','footermenu');
     menul.appendChild(sm);
     menulc.appendChild(menul);
     menul = null;
      rtst(vls, zsh, vRp, Tsc);
      
   }
  //aciona a funcao voltar do main menu
  var xDown = null, yDown = null, xUp = null, yUp = null;
  var jjx, ohmy, vSm, ttpp;
  function rtst(gor, ohzsh, vaSct, tyS) {
   
document.addEventListener('touchstart', touchstart, false);        
document.addEventListener('touchmove', touchmove, false);
document.addEventListener('touchend', touchend, false);
jjx = gor, ohmy = ohzsh, vSm = vaSct,ttpp = tyS;
console.log(`gor ${gor} //ohmy ${ohmy}`);
  }
function touchstart(evt) { const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
xDown = firstTouch.clientX;
yDown = firstTouch.clientY; }
function touchmove(evt) { if (!xDown || !yDown ) return; xUp = evt.touches[0].clientX;
yUp = evt.touches[0].clientY;
}
function touchend(evt) { 
    var xDiff = xUp - xDown, yDiff = yUp - yDown;
    if ((Math.abs(xDiff) > Math.abs(yDiff)) && (Math.abs(xDiff) > 0.33 * document.body.clientWidth)) { 
        if (xDiff < 0 && localizador === 3) {
            //console.log(`direcão X!  / valor=  xDiff${jjx} jjx//ohmy ${ohmy}`);
            console.log(`ttpp= ${ttpp} // vSm= ${vSm} // jjx= ${jjx} // localizador2= ${localizador2}`);
            if(localizador2 !== 3) {
            redirect(9, ttpp, vSm, jjx);
            }else{
              redirect(8, ttpp, vSm);
            }
       } else{
            //console.log('direcão Y valor=  '+ xDiff);
       }
      } 
     xDown = null, yDown = null;
    }
   //objeto de animação
   var party = {
     rotas: function (tip, rdrty, rdrSc, vls2) {
        if(tip !== 2 && tip !== 8 && tip !== 9){
       local.removeAttribute('class');
        }
       if(tip === 1){
      local.innerText = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      home1();
      scrollControl(rdrty,rdrSc);
     //go to home
   }else if(tip === 2){
     classdiv.innerText = '';
    marcation = 0;
    markank = 0;
    classdiv.setAttribute('class','linec');
    classd[0].setAttribute('onclick','class1()');
    classd[0].setAttribute('class','ordem');
    classd[1].setAttribute('onclick','class2()');
    classd[1].setAttribute('class','ordem');
    classd[2].setAttribute('onclick','class3()');
    classd[2].setAttribute('class','ordem');
    marca2.setAttribute('onclick','notas()');
    //eliminar
   }else if(tip === 3){
      local.innerText = '';
      allask.innerText = '';
      alignsearch = null;
      showarea.innerHTML = '';
      window.scrollTo(0, 0);
      allnum++;
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      menulc.innerHTML = '';
      home1();
      markank = 0;
     //nosearch
   }else if(tip === 4){
      local.innerText = '';
      allask.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      allnum++;
      search();
      scrollControl(rdrty,rdrSc);
      //retorna do subpag ate o searc
   }else if(tip === 5){
      local.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      category = [];
      menul = null;
      localizador = 4;
      menulc.innerHTML = '';
      cabecalho.innerHTML = '';
      home1();
      markank = 0;
      //retorna ao home do searclas
   }else if(tip === 6){
     local.innerHTML = '';
     ccmm(result);
     scrollControl(rdrty,rdrSc);
     //retorna a seleção por classe
   }else if(tip === 7){
     local.innerText = '';
     listmore.innerHTML = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      home1();
      alll();
      scrollControl(rdrty,rdrSc);
      console.log('feito 7');
      //reforma do alll
   }else if(tip === 8){
     menulc.innerHTML = '';
     localizador = 4
     menul = null;
     headandheart();
     console.log('redirect 8 on ')
     //retorna do menu
   }else if(tip === 9){
     menulc.innerHTML = '';
     localizador = 4
     menul = null;
     subhead(vls2, rdrty, rdrSc);
     console.log('entrou no redirect 9')
     //retira o menu do subpage
   }else if(tip === 10){
     local.innerText = '';
      listd = [];
      lista = [];
      listi = [];
      listp = [];
      mainblock = [];
      marcation = markank;
      menulc.innerHTML = '';
      localizador = 4
      menul = null;
      home1();
      console.log('redirect 10 ok ')
     //retorna do subpage ao menu
   }else if(tip === 11){
     local.innerHTML = '';
     //listmore.innerHTML = '';
      listd = [];
      listi = [];
      listp = [];
      mainblock = [];
      category = [];
      home1();
      scrollControl(rdrty,rdrSc);
     console.log('redirect 11 funcionou');
      markank = 0;
      //retorna ao home do sub mylist
   }else if(tip === 12){
     window.close();
     console.log('redirect 12 ativado')
   }
     },
     desv: function (tip1, rdrty1, rdrSc1, vls21) {
       if(tip1 !== 2 && tip1 !== 8 && tip1 !== 9){
       local.setAttribute('class','fechar');
       if(cabecalho.id === 'rst'){
         cabecalho.removeAttribute('id');
       }
       setTimeout(`party.rotas(${tip1}, ${rdrty1}, ${rdrSc1}, ${vls21})`, 500);
       }else{
         party.rotas(tip1, rdrty1, rdrSc1, vls21);
       }
     }
   }
 //funcao de redirecionamento
 //rdrSc valor do window scroll
 //rdrty tipo do scrol control
  
 function redirect(tip0, rdrty0=0, rdrSc0=0, vls20) {
   if(localizador === 7){
     cabecalho.removeAttribute('id')
   }
   party.desv(tip0, rdrty0, rdrSc0, vls20);
 }
 //controle do scroll
 
 function scrollControl(typ=0,nS=0) {
   let vl;
   switch (typ) {
     case 1:
       vl = nS * 171;
       window.scrollTo(vl, vl);
      break;
     case 2:
       let st = 930;
       st = st + (nS / 3) * 150;
       console.log(`${st}| test scroll`);
       window.scrollTo(st, st);
       //teste de scroll mais evoluído my list
      break;
     case 3:
      let st2 = 1300;
       st2 = st2 + (nS / 3) * 150;
       console.log(`${st2}| test scroll classe 1 e 3`);
       window.scrollTo(st2, st2);
       //scroll das classes 1 e 3
      break;
     case 4:
       let st3 = ((nS / 2) * 260) - 260;
       if(st3 <= 0){
         st3 = 0
       }
       console.log(`${st3}| scroll search`);
       window.scrollTo(st3, st3);
       //scroll do search
       break
      case 5:
       let st4 = ((nS / 2) * 260) - 260;
       if(st4 <= 0){
         st4 = 0
       }
       console.log(`${st4}| scroll classes`);
       window.scrollTo(st4, st4);
       //scroll das classes
       break
     default:
     //vazio
      break;
   }
 }
  
