Algoritmo ejercicio6
	Escribir "Introducir mes actual"
	leer mes
	
	Si mes="Noviembre" O mes="noviembre" O mes="Diciembre" O mes="diciembre" O mes="Enero" O mes="enero" O mes="Febrero" O mes="febrero" Entonces
		escribir "¿Qué día de la semana es hoy?"
		Leer diasemana
	SiNo
		Escribir "No tienes descuento"
	FinSi
	
	Si diasemana="Lunes" O diasemana="lunes" O diasemana="Martes" O diasemana="martes" O diasemana="Miércoles" O diasemana="Miercoles" O diasemana="miércoles" O diasemana="miércoles" O diasemana="Jueves" O diasemana="viernes" O diasemana="Viernes" Entonces
		Escribir "Tienes un descuento de 25%"
	SiNo
		Escribir "No tienes descuento"
	FinSi
	
FinAlgoritmo