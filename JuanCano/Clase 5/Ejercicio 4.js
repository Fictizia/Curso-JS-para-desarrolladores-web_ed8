// 4 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

// Se aplica un 25% cuando:
// Estamos en los meses de invierno
// Y no es viernes o fin de semana.


	var precio = prompt("¿Cuánto cuesta el producto?")
	var mes = prompt("¿En qué mes lo has comprado?")
	var dia = prompt("¿Qué día de la semana lo compraste?")

	if (mes == "Diciembre" || mes == "diciembre" || mes == "Enero" || mes == "enero" || mes == "Febrero" || mes == "febrero" && dia!= "viernes" || dia!= "Viernes" || dia!= "Sábado" || dia!= "sábado" || dia!= "Sabado" || dia!= "sabado" || dia!= "Domingo" || dia!= "domingo") {
	    console.log("Enhorabuena, tienes un descuento del 25%. El precio total de tu artículo es:", (precio*75)/100)
	}
	else {
	    console.log("Lo sentimos. No tienes descuento. El precio de tu artículo es:", precio )
	}