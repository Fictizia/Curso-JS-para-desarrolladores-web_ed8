// 3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.

var imagenes = document.querySelectorAll('.module-acceso a');

for(var i = 0; i < imagenes.length; i++){
	var url = document.querySelectorAll('.module-acceso a')[i].src;
	var sustituto = "https://static.pexels.com/photos/17679/pexels-photo.jpg" ;
	document.querySelectorAll('.module-acceso a')[i].src = sustituto;
}