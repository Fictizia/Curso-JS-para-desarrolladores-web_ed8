


var contador = window.setInterval( function(){ mostrarReloj() },1000);

function mostrarReloj(){


  var horas = new Date().getHours().toLocaleString();
  var minutos = new Date().getMinutes().toLocaleString();
  var segundos = new Date().getSeconds().toLocaleString();

document.querySelector('.horas h2').innerHTML = horas;
document.querySelector('.minutos h2').innerHTML = minutos;
document.querySelector('.segundos h2').innerHTML = segundos;




}
