// 4 - ¿Que fecha será dentro de un año y 10 horas más?

	// Solución 1

	var dentroDe = new Date();
	dentroDe.setDate(dentroDe.getDate() + 365.4166666666666667);
	dentroDe.toLocaleString(); //



	// Solución 2

	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setHours(ahora.getHours() + 10);
	ahora.setFullYear(ahora.getFullYear() + 1);
	console.log("En un año y 10 horas será " + ahora.toLocaleString());