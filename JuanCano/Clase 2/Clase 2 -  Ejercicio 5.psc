Proceso jugandoConNumeros
	Escribir "El primer nœmero:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Escribir "El tercer valor:"
	Leer valor3
	
	Si valor1 < 0 Entonces
		calculo <- valor2 + valor3
		Escribir "El resutlado de la suma es ", calculo
	Sino 
		calculo <- valor1 * valor2 * valor3
		Escribir "El resutlado de la multiplicacion es ", calculo		
	FinSi
	
FinProceso