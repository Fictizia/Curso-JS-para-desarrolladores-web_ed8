/* ----- REQUISITOS -----

**Características:**

- [] Cada asistente recibirá el identificador de su posición en el Array.
- [] El identificador no puede cambiar una vez reservado el asiento.
- [] Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
- [] Los nuevos asistentes seran asigandos primero a asientos desocupados.


**Opcional:**

- [] Verifica antes de asignar un asistente que no se registro previamente.

*/

/* ----- SOLUCIÓN ----- */

// Lista clientes
var list = ["Bob", undefined, "Louis"];

/* 
funcion añadir
*/

function add(name){
	if(list.indexOf(name) === -1){
		var emptyPosition = list.indexOf(undefined);
		emptyPosition === -1 ? list.push(name) : list[emptyPosition] = name;
	} else {
		console.log(name, "- is in the list!");
	}


}


/*
 función para quitar...
*/

function remove (name) {
	var namePosition = list.indexOf(name);
	if(namePosition === -1){
		console.log(name, "- not found!");
	} else {
		list[namePosition] = undefined;
	}
}


/* ------ TEST -----*/

// Scene Validation
console.assert(list.length === 3, "List - Wrong elements in Array");
console.assert(list[1] === undefined, "List - no undefined element");
console.assert(list[0] === "Bob", "List - Bob is first");

// Test add()
add("me");
console.assert(list.length === 3, "add('me') - Wrong length");
console.assert(list[1] === "me", "add('me') - Wrong undefined replacement");

add("me2");
console.assert(list.length === 4, "add('me2') - Wrong length");
console.assert(list[3] === "me2", "add('me2') - Wrong new element");

add("Bob");
console.assert(list.length === 4, "add('Bob') - Wrong length");


// Test remove()
remove("me2")
console.assert(list.length === 4, "remove('me2') - Wrong length");
console.assert(list[3] === undefined, "remove('me2') - Wrong replacement");

remove("nothing");
console.assert(list.length === 4, "remove('me2') - Wrong length");



