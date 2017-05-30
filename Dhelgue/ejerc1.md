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

Pedir por teclado tres números.
Si el primero es negativo, debe sumar los otros dos
Si no multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
	// Tu solución
6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
	// Tu solución
7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.

	// Tu solución
8 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es par o impar.

	// Tu solución
9 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.
	// Tu solución
10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año)
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
	// Tu solución
11 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50
numeros_romanos

	// Tu solución
