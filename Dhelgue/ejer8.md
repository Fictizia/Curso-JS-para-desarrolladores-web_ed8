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

	// Tu solución
4 - ¿Que fecha será dentro de un año y 10 horas más?

	// Tu solución
5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.

	// Tu solución



1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

	// Tu solución

