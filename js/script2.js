function mostrarPregunta1() {
    document.getElementById('boton1').style.display = 'none';
    document.getElementById('pregunta1').style.display = 'block';
}
function mostrarPregunta2() {
    document.getElementById('boton2').style.display = 'none';
    document.getElementById('pregunta2').style.display = 'block';
}
function mostrarPregunta3() {
    document.getElementById('boton3').style.display = 'none';
    document.getElementById('pregunta3').style.display = 'block';
}
function mostrarPregunta4() {
    document.getElementById('boton4').style.display = 'none';
    document.getElementById('pregunta4').style.display = 'block';
}
function mostrarPregunta5() {
    document.getElementById('boton5').style.display = 'none';
    document.getElementById('pregunta5').style.display = 'block';
}
function mostrarPregunta6() {
    document.getElementById('boton6').style.display = 'none';
    document.getElementById('pregunta6').style.display = 'block';
}
function mostrarPregunta7() {
    document.getElementById('boton7').style.display = 'none';
    document.getElementById('pregunta7').style.display = 'block';
}
function mostrarPregunta8() {
    document.getElementById('boton8').style.display = 'none';
    document.getElementById('pregunta8').style.display = 'block';
}
function mostrarPregunta9() {
    document.getElementById('boton9').style.display = 'none';
    document.getElementById('pregunta9').style.display = 'block';
}

function verificarRespuesta1() {
    var respuestaCorrecta = "b"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta1').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta1').style.display = 'none';
            document.getElementById('boton1').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta2() {
    var respuestaCorrecta = "c"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta2').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta2').style.display = 'none';
            document.getElementById('boton2').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta3() {
    var respuestaCorrecta = "c"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta3').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta3').style.display = 'none';
            document.getElementById('boton3').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta4() {
    var respuestaCorrecta = "a"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta4').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta4').style.display = 'none';
            document.getElementById('boton4').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta5() {
    var respuestaCorrecta = "b"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta5').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta5').style.display = 'none';
            document.getElementById('boton5').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta6() {
    var respuestaCorrecta = "b"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta6').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta6').style.display = 'none';
            document.getElementById('boton6').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta7() {
    var respuestaCorrecta = "c"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta7').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta7').style.display = 'none';
            document.getElementById('boton7').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta8() {
    var respuestaCorrecta = "c"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta8').style.display = 'none';
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta8').style.display = 'none';
            document.getElementById('boton8').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarRespuesta9() {
    var respuestaCorrecta = "b"; // Respuesta correcta
    var respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === respuestaCorrecta) {
            alert("¡Correcto + 1 Pista!");
            document.getElementById('pregunta9').style.display = 'none';
            setTimeout(function() {
                verificarGanador();
            }, 1000)
        } else {
            alert("¡Incorrecto!");
            document.getElementById('pregunta9').style.display = 'none';
            document.getElementById('boton9').style.display = 'block';
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

function verificarGanador() {
    var botones = [
        "boton1",
        "boton2",
        "boton3",
        "boton4",
        "boton5",
        "boton6",
        "boton7",
        "boton8",
        "boton9"
    ];

    var todosOcultos = botones.every(function (id) {
        var boton = document.getElementById(id);
        return boton.style.display === "none";
    });

    if (todosOcultos) {

        var respuesta = prompt("¿Quién es el culpable?\n a. Psicólogo\n b. Guardia de seguridad\n c. Turista");


        if (respuesta === 'b' || respuesta === 'B') {
            alert("¡GANASTE!");
            alert("Después de una exhaustiva investigación, se descubrió que el arma del crimen era un cuchillo de cocina del hotel que había sido lavado cuidadosamente para eliminar cualquier rastro de ADN. ");
            alert("Finalmente, las pruebas forenses y los testimonios de otros huéspedes llevaron a la conclusión de que la guardia de seguridad, María Torres, había cometido el crimen. María había estado involucrada en una relación con Alejandro, pero había sentido celos y resentimiento debido a que Alejandro había empezado a salir con Sarah. María había utilizado su conocimiento de las rutinas del hotel y su acceso a las llaves de las habitaciones para cometer el asesinato.");
            alert("Con las pruebas en su contra, María Torres fue arrestado y condenado por el asesinato de Alejandro. El misterio detrás del crimen en Playa Serena finalmente se resolvió, dejando atrás una historia de pasiones torcidas y traición en un lugar aparentemente tranquilo.");
            window.location.href = './index.html';
        } else {
            alert("Respuesta incorrecta. Inténtalo de nuevo.");
        }
    }
}