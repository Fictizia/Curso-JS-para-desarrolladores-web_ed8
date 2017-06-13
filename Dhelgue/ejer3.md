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


1 - Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:

Objetivos:

Captura el nombre del usuario usando prompt
Pregunta al usuario si desea "comprobar lo rápido que funciona su navegador".
En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
En caso negativo mostraremos un alert informativo.
Versión 1:

	var tuNombre = prompt("¿Cuál estu nombre?" , "") ;

	var respuesta = confirm("¿Quieres saber lo rápido que es el navegador?") ;

	if (respuesta === true) {
	    console.time(tuNombre) ;
	    console.log("%c" + tuNombre, "background-color:red; font-family:helvetiva; text-decoration: underline") ;
	    console.timeEnd(tuNombre) ;
	}
	else {
	    alert("Pues tu te lo pierdes...")
	}
	
Versión 2:

	var tuNombre = prompt("¿Cuál estu nombre?" , "") ;

	var respuesta = confirm("¿Quieres saber lo rápido que es el navegador?") ;

	if (respuesta === false) {
	    alert("Pues tu te lo pierdes...")
	}
	else {
	    console.time(tuNombre) ;
	    console.log('%c' + tuNombre, 'font-family: Arial; color: rgba(255,55,255,.8; font-size: 40px; text-decoration: underline') ;
	    console.timeEnd(tuNombre) ;
	}
	

1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto

	var numero1 = prompt("Dime un número");
	var numero2 = prompt("Dime un segundo número");

	console.log(parseInt(numero1) + parseInt(numero2));
	console.log(parseInt(numero1) - parseInt(numero2));
	console.log(parseInt(numero1) * parseInt(numero2));
	console.log(parseInt(numero1) / parseInt(numero2));
	
2 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

	var hombresClase = prompt("¿Cuántos hombres hay en clase?") ;
	var mujeresClase = prompt("¿Cuántas mujeres hay en clase?") ;

	var totalAlumnos = parseInt(hombresClase) + parseInt(mujeresClase) ;

	console.log("El porcentaje de mujeres es " , (mujeresClase/totalAlumnos)*100 );
	console.log("El porcentaje de hombres es " , (hombresClase/totalAlumnos)*100 );



