Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

1 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
La palabra clave es " 3)"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.
	


      var loginCorrecto = "Fictizia mola mucho"

      for (i=1 ; i <= 3 ; i++) {
        if (prompt("Dime la contraseña de acceso...") === loginCorrecto) {
          console.log("Bienvenido a Fictizia, te estabamos esperando!")
          break
        }
        else {
          console.log("¿Me estás tomando el pelo?")
        } ;

      }

      if (i>=3) {
        console.log("Fueraaaa!!")
      }

  
2 - Diseña un algoritmo que imprima los numeros del 1 al 100.

	
    for (var i=0; i<=100; i++) {
        console.log(i)
      }

3 - Diseña un algoritmo que imprima los numeros del 100 al 0.

    for (var i=100; i>=0; i--) {
     console.log(i)
      }

4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

	var i = 2 ;

	while (i<=98) {
	    console.log(i);

	    i= i+2 ;
	}

5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

	

	var numeroDado = prompt("Dime un numero impar y te diré los 50 numeros impares siguientes...") ;


	var i=1 ;


	while (i<=50) {
	 if(numeroDado %2 === 0) {
	 	numeroDado++ ;
	 	i++ ;
	 	}
	 else {
	 	console.log (numeroDado) ;
	 	numeroDado++ ;
		 i++ ;
	 	}
	}

	
	
6 - Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario

	function contadorEspecial(numero) {
		
		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");

		for (var i = 1; i <= 50; i++) {
			
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			
		};

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");
	}



7 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50
numeros_romanos

	function conversionRomana(numero) {
		
		var numeroOriginal = numero;
	  

		if (numero <= 50 && numero > 0){

	    var numeroRomano = "";
	    
			for(; numero > 0 ;){
				
				if(numero === 50){
					numeroRomano = "L";
					numero = 0;
				} else if (numero >= 40 && numero < 50){
					numeroRomano += "XL";
					numero -= 40;
				} else if (numero >= 10 && numero < 40){
					numeroRomano += "X";
					numero -= 10;
				} else if(numero === 9){
					numeroRomano += "IX";
					numero -= 9;
				} else if(numero === 8){
					numeroRomano += "VIII";
					numero -= 8;
				} else if (numero === 7){
					numeroRomano += "VII";
					numero -= 7;
				} else if (numero === 6){
					numeroRomano += "VI";
					numero -= 6;
				} else if (numero === 5) {
					numeroRomano += "V";
					numero -= 5;
				} else if (numero === 4){
					numeroRomano += "IV";
					numero -= 4;				
				} else if(numero <= 3 && numero > 0){
					numeroRomano += "I";
					numero -= 1;
				}
	      
			}

			console.info(numeroOriginal + " en números romanos es " + numeroRomano);

		} else {
	    
			console.warn(numeroOriginal + "NO es un número valido (0-50)");
		
	  	}

	}










