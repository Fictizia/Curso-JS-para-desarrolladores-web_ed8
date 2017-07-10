// 1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

	// Tu solución


	var texto = prompt("Introduce una frase");
	var letra = prompt("¿Qué letra quieres buscar?");
	var i = 0;
	var contador = 0;
		while (i != -1){
			var i = texto.indexOf(letra,i);
			if (i != -1){
				i++;
				contador++;
			}
		}
	// RESPUESTA
	if (contador != 1) {
	    alert("La letra " + letra + " aparece " + contador + " veces.");
	} else {
	    alert("La letra " + letra + " aparece " + contador + " vez.");
	}