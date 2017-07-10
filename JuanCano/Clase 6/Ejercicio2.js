// 3 - Diseña un algoritmo que imprima los numeros del 100 al 0.


// Usando for
	function contadorNegativo() {

		console.info("Empieza la cuenta!");

		for (var i = 100; i >= 0; i--) {
			console.log(i)
		};

		console.info("Terminó la cuenta mágica...");

	}


// Usando while
	function contadorNegativo() {

		console.info("Empieza la cuenta!");

		var i = 100
		while (i >= 0) {
			console.log(i);
			i--;
		};

		console.info("Terminó la cuenta mágica...");

	}


// Usando Do...While
	function contadorNegativo() {

		console.info("Empieza la cuenta!");

		var i = 100
		do {
			console.log(i);
			i--;
		} while (i >= 0);

		console.info("Terminó la cuenta mágica...");

	}