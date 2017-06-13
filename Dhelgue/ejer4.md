1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.


	function compararNumeros (valor1, valor2) {

	    if (valor1>valor2) {
	     console.log(valor1, " es mayor que" , valor2)
	    }
	    else {
	     console.log(valor2, " es mayor que" , valor1)
	    }

	}

	compararNumeros (2,8) ;



2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.


	function compararNumeros (valor1, valor2, valor3) {

	    if (valor1>valor2 && valor1>valor3) {
	     console.log(valor1, " es el mayor de los tres")
	    }
	    else if (valor2>1 && valor2>valor3) {
	     console.log(valor2, " es el mayor de los tres")
	    }
	    else {
	     console.log(valor3, " es el mayor de los tres")
	    }

	}

	compararNumeros (2,8,1) ;


3 - Diseña un script que siga el siguiente proceso:

Si el primero es negativo, debe sumar los otros dos
Sino multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
	
	function compararNumeros (valor1, valor2, valor3) {

    if (valor1<0) {
    console.log("La suma del segundo y el tercer valor es " , valor2 + valor3)
    }
    else {
    console.log("La multiplicación de los valores es " , valor1 * valor2 * valor3)
    }
	}

	compararNumeros(2,8,1) ;
	
	
4 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
	
		var precio = prompt("Dime el precio del artículo")
	var mes = prompt("Dime el mes en el que vas a comprar el artículo")
	var dia = prompt("Dime el día en el que vas a comprar el artículo")



	if (mes == "Diciembre" || mes == "Enero" || mes == "Febrero" && dia != "viernes" && dia != "sabado" && dia != "domingo" ) {
	    console.log("El precio total de tu artículo es " , (precio*25)/100 )

	}
	else {
	    console.log("El precio total de tu artículo es " , precio )
	}

	
5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

	// Tu solución
6 - Diseña un algoritmo que al introducir un número nos diga si es par o impar.

	// Tu solución
7 - Diseña un algoritmo que nos confirme si un año es bisiesto o no.

Caracteristicas de un año bisiesto:
Tiene que ser divisible entre 4
No tiene que ser divisible entre 100
Puede ser divisble entre 100 y entre 400
	// Tu solución
