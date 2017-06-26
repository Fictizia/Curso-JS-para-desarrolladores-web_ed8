1 - ¿Que fecha será dentro de 30 días?

    function sumaDias() {
      var hoy = new Date();
      hoy.toLocaleString("es-ES");
      hoy.setDate(hoy.getDate() + 30);

      console.log("Dentro de 30 días será el día " + hoy) ;
    }

2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
	*Horas: 
		var diaInicio = new Date(2017, 05, 25, 10, 0, 0) ;
		var hoy = new Date() ;	
		var horasTranscurridas = hoy.getHours() - diaInicio.getHours() ;

		console.warn("Han transcurrido " + horasTranscurridas + " horas desde el inicio del curso") ;
	
	*días: 
		

		var diaInicio = new Date(2017, 04, 25).getTime() ;
		var hoy = new Date().getTime() ;
		var diasTrascurridos = hoy - diaInicio
		var resultado = parseInt(diasTrascurridos/1000/60/60/24) ;

		console.warn("Han transcurrido " + resultado + " días desde el inicio del curso")



3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

	* Milisegundos:
		
		var hoy = new Date() ;
		var finCurso = new Date(2017 , 06 , 18 );
		var resultado = finCurso.getTime() - hoy.getTime() ;

		console.info("Quedan " + resultado + " ms para que finalice el curso")

	* Horas:
	

		var hoy = new Date() ;
		var finCurso = new Date(2017 , 06 , 18 );
		var resultado = finCurso.getTime() - hoy.getTime() ;
		var horas = (resultado/1000)/3600 ;

		console.warn("Quedan " + Math.floor(horas) + " horas para que finalice el curso");

	
	*Días: 

		var hoy = new Date() ;
		var finCurso = new Date(2017 , 06 , 18 );
		var resultado = finCurso.getTime() - hoy.getTime() ;
		var dias = (resultado/3600000)/24 ;

		console.warn("Quedan " + Math.floor(dias) + " dias para que finalice el curso");


4 - ¿Que fecha será dentro de un año y 10 horas más?

	var hoy = new Date() ; 
	hoy.setDate(hoy.getDate() + 365 + (10/24)) ;
	hoy.toLocaleString() ;

	console.log(hoy) ;

5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.

    var hoy = new Date() ;
    var tipologia = { 
   			 weekday: 'long',
   			 year: 'numeric', 
   			 month: 'long', 
    		day: 'numeric'} ;   

    console.warn(hoy.toLocaleString("ja-JP", tipologia)) ;
    console.warn(hoy.toLocaleString("ko-KO", tipologia)) ;  




1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

	function contarLetras() {
	var frase = prompt("Dime una frase aleatoria...");
	var letra = prompt("Dime una letra de tu frase...");
	var i = 0;
	var numeroRepeLetra = 0;
		while (i != -1){
			var i = frase.indexOf(letra,i);
			if (i != -1){
				i++;
				numeroRepeLetra++;
			}
		}


	if (numeroRepeLetra === 0 || numeroRepeLetra >= 1) {
	    console.warn("La letra " + letra + " aparece en tu frase " + numeroRepeLetra + " veces.") ;
	} 
	else {
	    console.warn("La letra " + letra + " aparece en tu frase " + numeroRepeLetra + " vez.") ;
	}
	}

