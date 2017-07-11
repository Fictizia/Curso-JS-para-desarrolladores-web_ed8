// 2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

// Opcional: Ordena los números pares e impares en sus respectivos arrays

var arrayPares = [], arrayImpares = [];

for (var i = 0; i<100; i++){
	var random = Math.floor((Math.random() * 6) + 1)
	if(random % 2 !== 0){
		arrayImpares.push(random);
	} else {
		arrayPares.push(random);
	}
}

// Opcional
arrayPares = arrayPares.sort();
arrayImpares = arrayImpares.sort();