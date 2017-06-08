1 - Utiliza .assert para controlar cuando se muestra tu nombre por consola.

	// Tu solución
2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.

Especificaciones:
Imprimir tu nombre usando console.log, console.info, console.warn

  console.log("Daniel");
  console.info("Daniel");
  console.warn("Daniel");


3 - Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.

    console.log('%c Daniel', 'background-color: gray');
    console.info('%c Daniel', 'font-family: Arial; color: rgba(255,55,255,.8; font-size: 40px; text-decoration: underline');
    console.warn('%c Daniel', 'font-family: Arial; color: rgba(255,55,255,.8; font-size: 40px; text-decoration: underline');

4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.

    console.time("miNombre");
    console.group("miNombre");
      console.log("Daniel");
      console.info("Daniel");
      console.warn("Daniel");
    console.groupEnd();
    console.timeEnd("miNombre");

5 - Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.

    var alumnos = [
        { nombre: "JPalomares", equipo: "Equipo-1" },
        { nombre: "DHelguera", equipo: "Equipo-2" },
        { nombre: "CChamorro", equipo: "Equipo-3" }
    ];

    console.table(alumnos);


Una línea
// Comentario en una línea
Multiples Líneas
/*
Una Línea....
Otra linea...
Etc...
*/
