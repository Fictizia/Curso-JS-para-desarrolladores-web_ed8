// 2 - Hagamos la web del Metro más divertida.

// Saca el estado actual de todas las líneas del metro de Madrid por consola.

// Opción A

	var lineas = document.querySelectorAll('.bloquet');

	for (var i = 0; i < lineas.length; i++) {
	  var estado = lineas[i].querySelector('.circulacion > .txt > a');

	  if(!estado) estado = lineas[i].querySelector('.circulacion > .r > a');

	  if(!estado) estado = lineas[i].querySelector('.circulacion > .n > a');

	  if(estado) console.log(estado.innerText.trim());

	}


// Opción B
	var lineas = document.querySelectorAll('.bloquet .circulacion  a');

	for (var i = 0; i < lineas.length; i++) {
	  if(lineas[i]) console.log(lineas[i].innerText.trim());
	}




