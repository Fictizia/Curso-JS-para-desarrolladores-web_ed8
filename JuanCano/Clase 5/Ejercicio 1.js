
1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

	// Tu solución

function comparadorNumerico (numero1, numero2){

    if (numero1 > numero2) {
        console.log(numero1, "es mayor que", numero2);
    } else if (numero1 < numero2){
        console.log(numero1, "es menor que", numero2);
    } else {
        console.log(numero1, "es igual a", numero2);
    }
}


comparadorNumerico(373,372);