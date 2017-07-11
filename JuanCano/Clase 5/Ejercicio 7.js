// 7 - Diseña un algoritmo que nos confirme si un año es bisiesto o no.

// Caracteristicas de un año bisiesto:
// Tiene que ser divisible entre 4
// No tiene que ser divisible entre 100
// Puede ser divisble entre 100 y entre 400
	// Tu solución

	var ano = prompt("Introduce un año");

		if ((ano %4) ==0 && (ano %100) !=0) {
		    console.log("El número", ano, "es bisiesto")
		}
		else if ((ano %100) ==0 && (ano %400) ==0){
			console.log("El número", ano, "es bisiesto")
		}else {
		    console.log("El número", ano, "no es bisiesto")
		}