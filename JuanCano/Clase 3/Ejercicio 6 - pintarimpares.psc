
Algoritmo ejercicio6
	
	Escribir "Dime un numero"
	leer numero
	
	suma = 0
	impar = 0
	i = numero
	
	mientras ( i<numero+50)
		
		Si (i%2!=0)
			
			impar = impar + 1
		Sino
			suma = suma + i
			
		FinSi
		
		i = i + 1
		
		
	FinMientras
	
	Escribir "La suma de los 50 numeros pares es de ", suma
	
	Escribir "El numero total de impares es ", impar
	
FinAlgoritmo