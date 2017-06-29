Ejercicios

1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]

	
	var arrayUno = [1, 2, 3,] ;
	var arrayDos = ["uno", "dos", "tres"] ;
	var arrayTres = [true, false, NaN] ;


	var arrayCombinado = [];

	for (var i = 0; i < arrayUno.length; i++) {
	    var combinado = [arrayUno[i], arrayDos[i], arrayTres[i]] ;
	    arrayCombinado.push(combinado) ;
		}

	console.log("La cambinación de los tres arrays es ", arrayCombinado) ;



2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

	* Array con 100 numeros enteros al azar:
		
		var arrayUno = []
		for (var i = 0; i < 100; i++) {
		    var numAleatorio = Math.floor((Math.random()*100)) ;
		    arrayUno.push(numAleatorio) ;
			}
		console.log(arrayUno) ;

	* Array con pares y otro con impares:
		
		var arrayPares = [] ;
		var arrayImpares = [] ;

		for (var i = 0; i < 100; i++) {

		    var numAleatorio = Math.floor((Math.random()*100)) ;

		    if(numAleatorio %2 === 0) {

		    arrayPares.push(numAleatorio) ;
		    }
		    else {
		    arrayImpares.push(numAleatorio) ;
		    }
			}

		console.log((arrayPares.sort())) ;	
		console.log((arrayImpares.sort())) ;


3 - Vamos a gestionar la lista de asistentes de un evento.

Características:

Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente.
	// Tu solución


