	//3 - Diseña un script que siga el siguiente proceso:

	Si el primero es negativo, debe sumar los otros dos
	Sino multiplicará los tres numeros
	Mostrar el resultado final incluyendo una referencia a la operación realizada.
	// Tu solución

	function comparaNumeros (numero1, numero2, numero3) {

	    if (numero1 < 0) {
		console.log("Si el primero es negativo, debe sumar los otros dos:", numero2 + numero3);
	    } else {
		console.log("Sino multiplicará los tres numeros:", numero1 * numero2 * numero3);
	    }
	};

	comparaNumeros(-5,36,21);