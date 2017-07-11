// 1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]


// Solución


var arreglo1 = ["La Nati", "La Jessy", "El Ruben", "El Jonathan"],
	arreglo2 = [6382983, 2801284, 4839201, 503819],
	arreglo3 = [true, false, false, true];

var anidacion = [];

for (var i = 0; i <= arreglo1.length; i++){
		var resumen = [arreglo1[i], arreglo2[i], arreglo3[i]];
		anidacion.push(resumen);
}

console.log("El resultado es %O", anidacion);