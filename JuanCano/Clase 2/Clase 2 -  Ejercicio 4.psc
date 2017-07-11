Proceso compararVariosNumeros
	Escribir "El primer nœmero:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Escribir "El tercer valor:"
	Leer valor3
	
	Si (valor1 > valor2) & (valor1 > valor3) Entonces
		Escribir valor1, " es mayor"
	Sino
		Si valor2 > valor3 Entonces
			Escribir valor2, " es mayor"
		Sino
			Escribir valor3, " es mayor"
		Fin Si
	Fin Si
	
FinProceso