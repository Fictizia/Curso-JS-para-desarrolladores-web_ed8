


var contador = window.setInterval( function(){ mostrarReloj() },1000);

function mostrarReloj(){

  var reloj_inicio = new Date();
  var reloj_fin = new Date(2017, 7, 18, 22, 00, 00);

   var transcurso = reloj_fin - reloj_inicio;
  var formato = new Date(transcurso);

  var horas = formato.getUTCHours();
  var minutos = formato.getUTCMinutes();
  var segundos = formato.getUTCSeconds();
  //
 document.querySelector('.horas h2').innerHTML = horas;
 document.querySelector('.minutos h2').innerHTML = minutos;
 document.querySelector('.segundos h2').innerHTML = segundos;




}
