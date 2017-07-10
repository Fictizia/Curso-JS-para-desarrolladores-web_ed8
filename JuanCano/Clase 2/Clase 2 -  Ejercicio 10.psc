Proceso verificadorDeFechas
	
	Escribir "Dime el A–o:"
	Leer year
	
	Escribir "Dime el Mes:"
	Leer month
	
	Escribir "Dime el Dia:"
	Leer day
	
	fecha <- ConvertirATexto(day) + "/" + ConvertirATexto(month) + "/" + ConvertirATexto(year)
	
	Si day <= 31 & day > 0 & month <= 12 & month > 0 & year > 0  Entonces
		Escribir "La fecha es correcta ", fecha
		
		Segun month Hacer
			1:
				fechaDetalle <- ConvertirATexto(day) + "de Enero de " + ConvertirATexto(year)
			2:
				fechaDetalle <- ConvertirATexto(day) + "de Febrero de " + ConvertirATexto(year)
			3:
				fechaDetalle <- ConvertirATexto(day) + "de Marzo de " + ConvertirATexto(year)
			4: 
				fechaDetalle <- ConvertirATexto(day) + "de Abril de " + ConvertirATexto(year)
			5:
				fechaDetalle <- ConvertirATexto(day) + "de Mayo de " + ConvertirATexto(year)
			6:
				fechaDetalle <- ConvertirATexto(day) + "de Junio de " + ConvertirATexto(year)
			7:
				fechaDetalle <- ConvertirATexto(day) + "de Julio de " + ConvertirATexto(year)
			8:
				fechaDetalle <- ConvertirATexto(day) + "de Agosto de " + ConvertirATexto(year)
			9:
				fechaDetalle <- ConvertirATexto(day) + "de Septiembre de " + ConvertirATexto(year)
			10:
				fechaDetalle <- ConvertirATexto(day) + "de Octubre de " + ConvertirATexto(year)
			11: 
				fechaDetalle <- ConvertirATexto(day) + "de Noviembre de " + ConvertirATexto(year)
			12:
				fechaDetalle <- ConvertirATexto(day) + "de Diciembre de " + ConvertirATexto(year)
		Fin Segun
		
		Escribir "La fecha en otro formato: ", fechaDetalle
		
	Sino
		Escribir "Error! los datos no son correctos!"
	Fin Si
	
FinProceso