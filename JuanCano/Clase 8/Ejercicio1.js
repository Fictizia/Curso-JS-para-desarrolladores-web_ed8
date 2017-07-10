// 2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?

	// Tu solución

    var hoy = new Date();
	 var comienzo = new Date(2017, 5, 25);
    var transcurso = hoy.getTime() - comienzo.getTime();
    console.log(transcurso); //milisegundos