Ejercicios

1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

    var parImpar = Math.random()

    if (parImpar >= 0 && parImpar < 0.5) {
      console.log("¡Ha salido cara!") ;
      }
    else {
      console.log("¡Ha salido cruz!")
    }

2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.


	var sumaDiez = 0 ;

	for (var i = 0 ; i<=100 ; i++) {

	    var dado1 = Math.floor((Math.random() * 6) + 1);
	    var dado2 = Math.floor((Math.random() * 6) + 1);

	    if((dado1 + dado2) === 10) {
	    sumaDiez++ ;
	    }
	}

	console.log("En 100 tiradas realizadas la suma de los dos dados ha dado como resultado DIEZ en " + sumaDiez + " veces") ;
	
1 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año) usando una función.
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
	
var dia = prompt("dime un día");
var mes = prompt("dime un mes");
var ano = prompt("dime un año");


    if (dia>0 && dia<32 && mes>0 && mes<13 && ano>1 && ano<9999) {
    
    var fechaCorrecta = new Date(ano,mes,dia) ;
    console.log(fechaCorrecta) ;
    
    }
    else {
    console.log ("Tu fecha es erronea, prueba con otra.")
    }
	
	
