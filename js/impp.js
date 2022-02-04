function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});


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
  
  var allvar = [[],[],[],[],[],[],[],[]];
  function import_json (solicitar) {
    //dados = [];
    for (let i in address){
    getJSON(`./dados/${address[i]}.json`, function(err, data) {
      if (err !== null) {
        console.log('Ocorreu um erro' + err);
      } else {
        allvar[0].push(data.shortNAME);
        allvar[1].push(data.name);
        allvar[2].push(data.middleNAME);
        allvar[3].push(data.img);
        allvar[4].push(data.link);
        allvar[5].push(data.provLINK);
        allvar[6].push(data.prov);
        allvar[7].push(data.sinopse);
        //console.log(data);
      }
    });
  }
  };