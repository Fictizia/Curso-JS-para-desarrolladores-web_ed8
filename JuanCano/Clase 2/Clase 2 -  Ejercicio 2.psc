Proceso porcentajeAlumnos
	Escribir "El nœmero de mujeres:"
	Leer cantidadMujeres
	
	Escribir "El nœmero de hombres:"
	Leer cantidadHombres
	
	// Suma
	totalAlumnos <- cantidadHombres + cantidadMujeres
	Escribir "El total de alumnos es: ", totalAlumnos
	
	// Porcentaje mujeres
	porcentajeMujeres <- (cantidadMujeres*100)/totalAlumnos
	Escribir "El total de mujeres es: ", cantidadMujeres
	Escribir "El % de mujeres es: ", porcentajeMujeres
	
	// Porcentaje hombres
	porcentajeHombres <- (cantidadHombres*100)/totalAlumnos
	Escribir "El total de hombres es: ", cantidadHombres
	Escribir "El % de hombres es: ", porcentajeHombres
	
FinProceso