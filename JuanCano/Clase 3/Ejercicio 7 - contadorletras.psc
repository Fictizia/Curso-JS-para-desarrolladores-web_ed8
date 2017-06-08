Algoritmo contadorletras
	
	Escribir "Escribe una frase"
	leer frase
	
	Escribir "Dime una letra"
	leer letra
	
	contletra = 0
	
	
	Para i=1 hasta Longitud(frase) Hacer
        Para j=1 hasta Longitud(letra) Hacer
            Si Subcadena(frase,i,i)=Subcadena(letra,j,j) Entonces
                contletra=contletra+1
            FinSi
        FinPara
    FinPara
	
	Escribir contletra
	
FinAlgoritmo