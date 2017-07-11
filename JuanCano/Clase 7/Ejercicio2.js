// 1 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

// Características:

// El usuario introduce tres números (día, mes, año) usando una función.
// Validar la fecha. En caso de error incluir un mensaje informativo.
// Después de validar, devolvemos la fecha en formato DD/MM/AAAA
// Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)





// Solución 1:

	function verificadorDeFechas (day, month, year) {
		// Opcion 1
		var fecha = new Date(year, month-1, day);

		if (fecha.getFullYear() === year){
			var opciones = {
			    weekday: 'long',
			    year: 'numeric',
			    month: 'long',
			    day: 'numeric'
			};
			var fechaFormato = fecha.getDate() + "/" + (fecha.getMonth()+1) +"/"+ fecha.getFullYear();

			console.info("La fecha es correcta", fechaFormato);
			console.info("La fecha en otro formato: ", fecha.toLocaleString("es-ES", opciones));

		} else {
			console.warn("Error! los datos no son correctos!");
		}
	}