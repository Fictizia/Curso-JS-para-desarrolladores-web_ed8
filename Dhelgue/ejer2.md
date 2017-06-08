1 - Diseña un programa que nos confirme si un año es bisiesto o no.

Caracteristicas de un año bisiesto: Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100 O puede ser divisble entre 100 y entre 400
	
	Algoritmo Bisiesto
	
	Escribir "Dime un año cualquiera..."
	Leer year
	
	Si year MOD 4 = 0 y (year MOD 100 <> 0) o ((year MOD 100 = 0) y (year MOD 400 = 0))Entonces
		Escribir "Tu año es bisiesto"
	SiNo
		Escribir "Tu año no es bisiesto"
	FinSi

	FinAlgoritmo

2 - Diseña un programa que imprima los numeros del 1 al 100.

	Algoritmo ejer1_clase3
	
	
	Escribir "Comienza la cuenta..."
	
	contador<-0
	
	Mientras contador <=100 Hacer
		
		Escribir contador 
		
		contador<- contador+1
		
	FinMientras
	
	FinAlgoritmo


3 - Diseña un programa que imprima los numeros del 100 al 0.

	Algoritmo ejer1_clase3


		Escribir "Comienza la cuenta atrás..."

		contador<-100

		Mientras contador >=0 Hacer

			Escribir contador 

			contador<- contador-1

		FinMientras

	FinAlgoritmo


4 - Diseña un programa que imprima los numeros pares entre 0 y 100.
	Algoritmo ejer1_clase3


		Escribir "Comienza la cuenta atrás..."

		contador<-2

		Mientras contador <=100 Hacer

			Escribir contador 

			contador<- contador+2 

		FinMientras

		FinAlgoritmo

5 - Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

	Algoritmo ejer1_clase3


		Escribir "Dime un número impar menor que 100..."
		Leer numeroImpar

		vueltas =  0

		Escribir "Comienza la cuenta"

		Mientras vueltas<=50 Hacer

			Escribir numeroimpar 

			numeroimpar<- numeroimpar+1

			vueltas = vueltas+1

		FinMientras


	FinAlgoritmo



6 - Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario

	// Tu solución
7 - Diseña un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.

	// Tu solución
8 - Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

	Algoritmo Azar1
	
	Escribir "Lanzamos una moneda al aire y..."
	
	posibilidades <- azar(2)
	
	Si posibilidades = 1
		Escribir "Ha salido cruz"
	SiNo
		Escribir "Ha salido Cara"
	FinSi
	
	FinAlgoritmo

9 - Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

	Algoritmo Azar2
	
	Escribir "Vamos a lanzar 2 dados al aire..."
	
	vecesSuman <- 0
	
	vueltas <- 0
	
	Mientras (vueltas<100) Hacer
		
		dado1 <- azar(7)
		dado2 <- azar(7)
		
		Si (dado1+dado2=10) Entonces
			vecesSuman <- vecesSuman + 1
		FinSi
		
		vueltas <- vueltas + 1
	FinMientras
	
	Escribir "En 100 tiradas, los dos dados han sumado 10 en " , vecesSuman , " ocasiones"
	
	FinAlgoritmo

