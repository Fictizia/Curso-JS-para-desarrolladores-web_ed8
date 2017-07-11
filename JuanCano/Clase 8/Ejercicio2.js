// 3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

	// Tu solución

    var fin = new Date(2017, 6, 18, 22, 0, 0);
	console.log("Fecha de finalizacion: " + fin.toLocaleString());
    var ahora = new Date();
	console.log("Fecha actual: " + hoy.toLocaleString());
    var diferencia = fin - ahora;

	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var dias = Math.floor( diferencia/ ( 24 * 60 * 60 * 1000 ) );

	console.info("Quedan "+ horas +" horas.");
	console.info("Quedan "+ dias +" días.");



