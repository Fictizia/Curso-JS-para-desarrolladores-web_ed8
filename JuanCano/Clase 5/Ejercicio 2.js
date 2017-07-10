2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

	// Tu solución


    function comparadorNumerico (numero1, numero2, numero3){

        if (numero1 > numero2 && numero1 > numero3) {
            console.log(numero1, "es mayor que", numero2, "y", numero3);
        } else if (numero2 > numero1 && numero2 > numero3){
            console.log(numero2, "es mayor que", numero1, "y", numero3);
        } else if(numero3 > numero1 && numero3 > numero2){
            console.log(numero3, "es mayor que", numero1, "y", numero2);
        } else{
            console.log(numero1, ",", numero2, "y", numero3, "son iguales")
        }
    };

    comparadorNumerico(373,372,483);