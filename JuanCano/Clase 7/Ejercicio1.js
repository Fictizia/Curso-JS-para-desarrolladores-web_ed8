// 2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

    function azarDados() {

        var coincidencias = 0;

        for (var i = 0; i < 100; i++) {

            var dado1 = Math.floor((Math.random() * 6) + 1);
            var dado2 = Math.floor((Math.random() * 6) + 1);
            var tirada = dado1 + dado2;

            if (tirada === 10) {
                coincidencias++;
            }
        };

        console.info("El azar ... sumó 10 un total de " +coincidencias+ " veces")

    }