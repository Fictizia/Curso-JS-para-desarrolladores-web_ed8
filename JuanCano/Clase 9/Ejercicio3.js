// 3 - Vamos a gestionar la lista de asistentes de un evento.

// Características:

// Cada asistente recibirá el identificador de su posición en el Array.
// El identificador no puede cambiar una vez reservado el asiento.
// Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
// Los nuevos asistentes seran asigandos primero a asientos desocupados.
// Opcional:

// Verifica antes de asignar un asistente que no se registro previamente.


var lista = [];

function asignar(nombre) {
    var registrado = false;
    var vacante = false;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] === undefined) {
            vacante = i;
        }
        if (lista[i] === nombre) {
            registrado = i;
        }
    }

    if (registrado || registrado === 0) {
        console.warn("Ya estabas registrado!");
        console.info("Eres el asistente número", registrado);
    } else {
        if (vacante || vacante === 0) {
            lista[vacante] = nombre;
            console.info("Eres el asistente número", vacante);
            console.info("Felicidades! has ocupado un asiento que estaba vacio.");
        } else {
            lista.push(nombre);
            console.info("Eres el asistente número", lista.length - 1);
            console.info("No quedan asientos vacios antes que el tuyo.");
        }
    }

}

function quitar(nombre) {
    var registrado = false;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] === nombre) {
            registrado = i;
        }
    }

    if (registrado || registrado === 0) {
        lista[registrado] = undefined;
        console.info("El asistente " + nombre + " ha sido eliminado.");
        console.info("El asiento " + registrado + " esta vacio.");
    } else {
        console.warn("El asistente " + nombre + "... no existe!");
    }
}

// Test:
asignar("Ulises");
/*
Eres el asistente número 0
No quedan asientos vacios antes que el tuyo.
*/
asignar("Yo mismo");
/*
Eres el asistente número 1
No quedan asientos vacios antes que el tuyo.
*/
quitar("ulises"); // El asistente ulises... no existe!
quitar("Ulises");
/*
El asistente Ulises ha sido eliminado.
El asiento 0 esta vacio.
*/
asignar("Carlos"); // Eres el asistente número 0
asignar("Carlos");
/*
Ya estabas registrado!
Eres el asistente número 0
*/