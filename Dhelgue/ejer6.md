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

	// Tu solución
7 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50
numeros_romanos

	// Tu solución










