
var url = "http://airemad.com/api/v1/pollen"

var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {

  if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
    //console.info(JSON.parse(xmlHttp.responseText));
    devuelveCadena(JSON.parse(xmlHttp.responseText))
  }else if(xmlHttp.status === 404){
    console.log('ERROR 404!');
    console.info(JSON.parse(xmlHttp.responseText));
  }
};
xmlHttp.open("GET", url, true);
xmlHttp.send();


function devuelveCadena(arr) {
  //
  var resultado = "";
  var htmlToAdd = "";
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
      htmlToAdd = "<li>" + arr[i].name + "</li>";
      resultado += htmlToAdd;
  }
  console.log(resultado);
  mostrarEnPantalla(resultado);
}

//

function mostrarEnPantalla(stringResult){
  document.querySelector(".main ul").innerHTML = stringResult;
}
