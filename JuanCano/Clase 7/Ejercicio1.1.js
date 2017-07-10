// 1 - ¿Que fecha será dentro de 30 días?

	// Tu solución

	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setDate(ahora.getDate() + 30);
	console.log("En 30 días será " + ahora.toLocaleString());