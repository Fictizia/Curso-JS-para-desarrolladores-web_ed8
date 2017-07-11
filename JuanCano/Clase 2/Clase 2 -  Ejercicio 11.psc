Proceso conversionRomana
	Escribir "Dame un nœmero:"
	Leer numero
	
	numeroOriginal <- numero
	numeroRomano <- ""
	
	Si numero <= 50 & numero > 0 Entonces
		
		Mientras numero > 0 Hacer
			// Escribir "Numero: ", numero
			
			Si numero = 50 Entonces
				numeroRomano = "L"
				numero = 0
			Fin Si
			
			Si numero >= 40 & numero < 50 Entonces
				numeroRomano = numeroRomano + "XL"
				numero = numero - 40
			Fin Si
			
			Si numero >= 10 & numero < 40 Entonces
				numeroRomano = numeroRomano + "X"
				numero = numero - 10
			Fin Si	
			
			Si numero = 9 Entonces
				numeroRomano = numeroRomano + "IX"
				numero = numero - 9
			Fin Si		
			
			Si numero = 8 Entonces
				numeroRomano = numeroRomano + "VIII"
				numero = numero - 8
			Fin Si	
			
			Si numero = 7 Entonces
				numeroRomano = numeroRomano + "VII"
				numero = numero - 7
			Fin Si	
			
			Si numero = 6 Entonces
				numeroRomano = numeroRomano + "VI"
				numero = numero - 6
			Fin Si	
			
			Si numero = 5 Entonces
				numeroRomano = numeroRomano + "V"
				numero = numero - 5
			Fin Si	
			
			Si numero = 4 Entonces
				numeroRomano = numeroRomano + "IV"
				numero = numero -4
			Fin Si
			
			Si numero <= 3 & numero > 0 Entonces
				numeroRomano = numeroRomano + "I"
				numero = numero - 1
			Fin Si		
			
		Fin Mientras
		
		Escribir numeroOriginal " en nœmeros romanos es " numeroRomano
	Sino
		Escribir numeroOriginal " NO es un nœmero valido (0-50)"
	Fin Si
	
FinProceso