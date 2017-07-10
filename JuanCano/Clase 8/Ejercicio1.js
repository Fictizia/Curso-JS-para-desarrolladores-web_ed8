// 2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?

	// Tu solución
	var comienzo = new Date(2017, 5, 25, 19, 0, 0);
	console.log("Fecha de inicio: " + inicio.toLocaleString());
    var hoy = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var transcurso = hoy - comienzo;

	var segundos = Math.floor( transcurso / 1000);
	var horas = Math.floor( transcurso / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( transcurso / ( 60 * 1000 ) );
	var dias = Math.floor( transcurso / ( 24 * 60 * 60 * 1000 ) );

	console.log("Han pasado " + transcurso +"ms");
	console.log("Han pasado "+ segundos +" segundos.");
	console.log("Han pasado "+ minutos +" minutos.");
	console.info("Han pasado "+ horas +" horas.");
	console.info("Han pasado "+ dias +" días.");







