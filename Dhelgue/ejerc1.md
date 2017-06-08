1 - Diseña un programa que lea dos números y realice los siguientes cálculos:

Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto

	Algoritmo ejer1
	
		Escribir "Dime un número"

		Leer numero1

		Escribir "Dime otro número"

		Leer numero2


		Escribir "La suma es..." , numero1+numero2
		Escribir "La suma es..." , numero1-numero2
		Escribir "La suma es..." , numero1*numero2
		Escribir "La suma es..." , numero1/numero2
	
	
	FinAlgoritmo

2 - Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.

	Algoritmo ejer2
	
		Escribir "¿Cuántos hombres hay en clase?"

		Leer hombres

		Escribir "¿Cuántas mujeres hay en clase?"

		Leer mujeres

		totalAlumnos = hombres+mujeres

		porcentajeH = (hombres*100)/totalAlumnos
		porcentajeM = (mujeres*100)/totalAlumnos

		Escribir "El porcentaje de hombre en clase es..." , porcentajeH
		Escribir "El porcentaje de mujeres en clase es..." , porcentajeM
	
	FinAlgoritmo	
	
	
3 - Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

	Algoritmo ejer3
	
	Escribir "Dime un número..."

		Leer numero1

		Escribir "Dime un segundo número..."

		Leer numero2


		Si numero1>numero2 Entonces
			Escribir numero1 , " es mayor que " , numero2
		Fin Si


		Si numero2>numero1 Entonces
			Escribir numero2 , " es mayor que " , numero1
		Fin Si


		Si numero1=numero2 Entonces
			Escribir numero1 , " es igual que " , numero2
		Fin Si
	
	
	FinAlgoritmo



4 - Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.

	Algoritmo ejer4

		Escribir "Dime un número..."

		Leer numero1

		Escribir "Dime un segundo número..."

		Leer numero2


		Escribir "Dime un tercer número..."

		Leer numero3

		Si numero1>numero2 Y numero1>numero3 Entonces
			Escribir numero1 , " es el mayor de todos "
		Fin Si


		Si numero2>numero1 Y numero2>numero3 Entonces
			Escribir numero2 , " es el mayor de todos "
		Fin Si


		Si numero1>numero2 Y numero1<numero3 Entonces
			Escribir numero3 , " es el mayor de todos "
		Fin Si

		Si numero2>numero1 Y numero2<numero1 Entonces
			Escribir numero1 , " es el mayor de todos "
		Fin Si

	FinAlgoritmo


5 - Diseña un programa que siga el siguiente proceso:

	Algoritmo ejer5
		Escribir "Dime un número..."
		Leer numero1

		Escribir "Dime un segundo número..."
		Leer numero2

		Escribir "Dime un tercer número..."
		Leer numero3

		Si numero1<0 Entonces
			Escribir "Si tus tres números los sumamos dará como resultado..." , numero1+numero2+numero3
		FinSi

		Si numero1>0 Entonces
			Escribir "Si tus tres números los multiplicamos dará como resultado..." , numero1*numero2*numero3
		FinSi
	FinAlgoritmo

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

	Algoritmo ejer6
		Escribir "EL iPhone cuesta..."
		Leer precio

		Escribir "¿Quieres saber si tendrás un descuento? ¿En qué estación del año nos encontramos?"
		Leer estacion

		Escribir "¿Qué día de la semana es hoy?"
		Leer dia

		Si estacion = "invierno" O dia = "lunes" O dia ="martes" O dia ="miercoles" O dia ="jueves" Entonces
			Escribir "¡Si tienes un descuento del 25%, por tanto el precio de tu iPhone será..." , precio-(precio*25)/100
		Sino 
			Escribir "Opps, lo sentimos, no tenemos descuento para tu iPhone, el precio será de..." , precio
		FinSi


	FinAlgoritmo

	
7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
	
	Algoritmo ejer7
		Repetir

		Escribir "Dime un número al azar"
		Leer numero1

		Si numero1>=0 Entonces
			Escribir "El número " , numero1 , " es positivo"
		FinSi

		Si numero1<0 Entonces
			Escribir "Tu número " , numero1 , " es negativo"
		FinSi

		Hasta que numero1=0 
	FinAlgoritmo
	


8 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es par o impar.

	Algoritmo ejer8
		Repetir

			Escribir "Dime un número al azar"
			Leer numero1


			Si numero1 MOD 2 = 0 Entonces
				Escribir "El número " , numero1 , " es par"
			FinSi

			Si numero1 MOD 2 <> 0 Entonces
				Escribir "Tu número " , numero1 , " es impar"
			FinSi

		Hasta que numero1=0 

	FinAlgoritmo
	
9 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

	Algoritmo ejer9
		intentos<-0

		Repetir
		Escribir "Contraseña de Acceso a Fictizia..."
		Leer contrasena

		Si contrasena = "Fictizia mola mucho" Entonces
			Escribir "¡Te estabamos esperando, adelante!"
		Sino Escribir "De momento no molas nada"
			intentos<-(intentos+1)
		FinSi

	Hasta Que intentos=4

		Si intentos=4 Entonces
			Escribir "Ya no molas nada de nada"
		FinSi

	FinAlgoritmo
	
10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

	Algoritmo ejer10

		Escribir "Dime un día con el formato DD"
		Leer dia

		Escribir "Dime un mes con el formato MM"
		Leer mes

		Escribir "Dime un año con el formato AAAA"
		Leer año

		Si dia>1 y dia<31 y mes>1 y mes<12 y año>1 y año<9999 Entonces
			Escribir "Tu fecha " dia "/" mes "/" año " es válida"
		SiNo
			Escribir "Tu fecha no es válida"

		FinSi

		Escribir "Ahora vamos a convertir tu fecha en un formato más amigable"


		Si mes=1 Entonces
			Escribir "Tu fecha es el" dia " de Enero del "  año " "
		Fin Si

		Si mes=2 Entonces
			Escribir "Tu fecha es el" dia " de Febrero del " año " "
		Fin Si

		Si mes=3 Entonces
			Escribir "Tu fecha es el" dia " de Marzo del " año " "
		Fin Si

		Si mes=4 Entonces
			Escribir "Tu fecha es el" dia " de Abril del " año " "
		Fin Si

		Si mes=5 Entonces
			Escribir "Tu fecha es el" dia " de Mayo del " año " "
		Fin Si

		Si mes=6 Entonces
			Escribir "Tu fecha es el" dia " de Junio del " año " "
		Fin Si

		Si mes=7 Entonces
			Escribir "Tu fecha es el" dia " de Julio del " año " "
		Fin Si

		Si mes=8 Entonces
			Escribir "Tu fecha es el" dia " de Agosto del " año " "
		Fin Si

		Si mes=9 Entonces
			Escribir "Tu fecha es el" dia " de Septiembre del " año " "
		Fin Si

		Si mes=10 Entonces
			Escribir "Tu fecha es el" dia " de Octubre del " año " "
		Fin Si

		Si mes=11 Entonces
			Escribir "Tu fecha es el" dia " de Noviembre del " año " "
		Fin Si

		Si mes=12 Entonces
			Escribir "Tu fecha es el" dia " de Diciembre del " año " "
		Fin Si



	FinAlgoritmo
	
11 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50
numeros_romanos

	// Tu solución
