// 4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

// Usando for
	function contadorPares() {

		console.info("Empieza la cuenta!");

		for (var i = 0; i <= 100; i += 2) {
			console.log(i)
		};

		console.info("Terminó la cuenta mágica...");

	}

// Usando while
	function contadorPares() {

		console.info("Empieza la cuenta!");

		var i = 0
		while (i <= 100) {
			console.log(i);
			i += 2;
		};

		console.info("Terminó la cuenta mágica...");

	}

// Usando Do...While
	function contadorPares() {

		console.info("Empieza la cuenta!");

		var i = 0
		do {
			console.log(i);
			i += 2;
		} while (i <= 100);

		console.info("Terminó la cuenta mágica...");

	}