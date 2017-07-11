// 5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

// Usando for (desestructurado)
	function contador50Impares(numero) {

		var impar = 0;

		console.info("Empieza la cuenta!");

		for ( ; impar <= 50 ; ) {

			if (numero % 2 !== 0){
				console.log(numero);
				impar++

			}

        numero++

		};

		console.info("Terminó la cuenta mágica...");

	}

// Usando while
	function contador50Impares(numero) {

		console.info("Empieza la cuenta!");

		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				console.log(numero);
			}
			numero++
			i++;
		};

		console.info("Terminó la cuenta mágica...");

	}

// Usando Do...While
	function contador50Impares(numero) {

		console.info("Empieza la cuenta!");

		var i = 1
		do {
			if (numero % 2 !== 0){
				console.log(numero);
				numero++
			} else (
				numero++
			)
			i ++;
		} while (i <= 50);

		console.info("Terminó la cuenta mágica...");

	}