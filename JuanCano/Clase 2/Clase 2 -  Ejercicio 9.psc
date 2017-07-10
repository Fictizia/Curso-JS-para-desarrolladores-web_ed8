Proceso eureka
	clave <- "Fictizia mola mucho"
	acierto <- FALSO
	contador <- 0
	
	Mientras contador < 3 & acierto = FALSO Hacer
		Escribir "Dime el secreto:"
		Leer secreto
		
		Si secreto = clave Entonces
			acierto <- VERDADERO
			Escribir secreto, " es la clave que esperaba!"
		Sino
			Escribir secreto, " no es correcto."
		Fin Si
		
		contador<- contador+1
		
	Fin Mientras
	
	Si contador >= 3 Entonces
		Escribir "Lo siento... pero has agotado los 3 intentos."
	Fin Si
	
FinProceso