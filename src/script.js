// Inicialización de  variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let tiempoRegresivoId = null;

let movimientos = 0;
let aciertos = 0;
let timer = 30;
let temporizador = false;
let intervalId;

const tablero = document.getElementById("tablero");
const felicidadesMensaje = document.querySelector(".contenedor-ganador");
const fracasoMensaje = document.querySelector(".contenedor-perdedor");

let mostrarMovimientos = document.querySelector("#movimientos");
let mostrarTiempo = document.querySelector("#tiempo");

// Generación de emojis aleatorios
let emojis = [
  "🦄",
  "🦄",
  "🦖",
  "🦖",
  "​🐳",
  "​🐳",
  "🐣",
  "🐣",
  "​🙉",
  "​🙉",
  "🦁",
  "🦁",
  "🐧",
  "🐧",
  "🐖",
  "🐖",
];

let azarEmojis = emojis.sort(() => Math.random() - 0.5);

function contarTiempo() {
  tiempoRegresivoId = setInterval(() => {
    timer--;

    mostrarTiempo.innerHTML = `Tiempo: ${timer}s`;
    if (timer == 0) {
      clearInterval(tiempoRegresivoId);
      tablero.style.display = "none";
      fracasoMensaje.style.display = "block";
    }
  }, 1000);
}

function formatearTiempo(tiempo) {
  return tiempo < 10 ? `0${tiempo}` : tiempo;
}

// función principal
function destapar(id) {
  if (!temporizador) {
    contarTiempo();
    temporizador = true;
  }

  tarjetasDestapadas++;
  const cuadro = document.getElementById(id);

  if (tarjetasDestapadas == 1) {
    tarjeta1 = cuadro;
    primerResultado = azarEmojis[id];
    tarjeta1.innerHTML = primerResultado;

    // deshabilitar primer tarjeta
    tarjeta1.classList.add("disabled");
  } else if (tarjetasDestapadas == 2) {
    // mostrar segundo emoji
    tarjeta2 = cuadro;
    segundoResultado = azarEmojis[id];
    tarjeta2.innerHTML = segundoResultado;

    // deshabilitar segundo botón
    tarjeta2.classList.add("disabled");

    // incrementar  movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if (primerResultado === segundoResultado) {
      tarjetasDestapadas = 0;

      aciertos++;

      if (aciertos === 8) {
        felicidadesMensaje.style.display = "block"; // Mostrar mensaje de felicitaciones
        tablero.style.display = "none"; // Ocultar tablero
        clearInterval(intervalId); // Detener el temporizador
      }
    } else {
      // Mostrar momentaneamente valores y volver a tapar
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.classList.remove("disabled");
        tarjeta2.classList.remove("disabled");
        tarjetasDestapadas = 0;
      }, 500);
    }
  }
}
