	var numero = 450;
	var otroNumero = 23;

	function sumaCuadrados (a, b) {
		var numero = a;
		var otroNumero = b;
		var calculo = (numero*numero) + (otroNumero*otroNumero);
		console.log("\"numero\" es \""+numero+"\", local");
		console.log("\"otroNumero\" es \""+otroNumero+"\", local");
	};

	function verificarGlobales() {
		console.log("\"numero\" es \""+numero+"\", global");
		console.log("\"otroNumero\" es \""+otroNumero+"\", global");
	};



var numero = 2;
var otroNumero = 4;

function sumaCuadrados (a, b) {
	var numero = a;
	var otroNumero = b;
	var calculo = (numero*numero) + (otroNumero*otroNumero);
	console.log("\"numero\" es \""+numero+"\", local");
	console.log("\"otroNumero\" es \""+otroNumero+"\", local");
};

function verificarGlobales() {
	console.log("\"numero\" es \""+numero+"\", global");
	console.log("\"otroNumero\" es \""+otroNumero+"\", global");
};







function hacerSurf(traje, tabla, callback) {
    console.info('Me voy a surfear.\n\nNo me puedo olvidar de el ' + traje + 'y la ' + tabla);
    callback();
}

comerSandwich('traje', 'tabla', function() {
    console.info('Ya terminé...');
});
















function comerSandwich(elemento1, elemento2, callback) {
    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
    callback();
}

comerSandwich('jamón', 'queso', function() {
    console.info('Ya terminé...');
});