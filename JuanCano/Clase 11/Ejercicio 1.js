// 1 - Saca una lista de los cursos disponibles en Fictizia en las 4 areas de formación y conviertelo en Markdown. Características:

// Cada Bloque de cursos debe estar identificado por el título correspondiente.
// Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.


	// Simular el Click (Opcional)
	document.getElementById('web_Tab').click();

	var areas = document.querySelectorAll('#areas > section');
	var markdown = "# Cursos de Fictizia\n\n";

	for (var i = 0; areas.length > i; i++) {

	    var area = areas[i].querySelectorAll('li > a');
	    markdown += "## " + areas[i].querySelector('h2').innerText.trim() + "\n\n";
	    markdown += "**Total de cursos: " + area.length + "**\n";

	    for (var j = 0; area.length > j; j++) {
	            var link = area[j].getAttribute("href");
	            var horas = area[j].querySelector(".contextualInfo").innerText.trim();
	                horas = horas.replace("Curso de ", "").replace("Workshop de ").replace("Master de ", "").replace("undefined", "");
	            var titulo = area[j].querySelector("strong").innerText.trim();
	            var curso = "- [" + titulo + " (" + horas + ")](" + link + ")\n";
	            markdown += curso;
	    }
	    markdown += "\n\n"
	}

	console.log(markdown);

