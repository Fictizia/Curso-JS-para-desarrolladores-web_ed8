// 5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.

    var ahora = new Date();

    var opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'};

    console.info(ahora.toLocaleString("ja-JP", opciones));
    console.info(ahora.toLocaleString("ko-KO", opciones));
