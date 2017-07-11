function porcentajeAlumnos(totalHombres, totalMujeres){
	var totalAlumnos = totalHombres + totalMujeres;
	var porcentajeMujeres = (totalMujeres*100)/totalAlumnos;
	var porcentajeHombres = (totalHombres*100)/totalAlumnos;

	console.info("El total de alumnos es:", totalAlumnos)

	console.log("El total de mujeres es:", totalMujeres);
	console.info("El % de mujeres es:", porcentajeMujeres);

	console.log("El total de hombres es:", totalHombres);
	console.info("El % de hombres es:", porcentajeHombres);
};

porcentajeAlumnos(5,3);
