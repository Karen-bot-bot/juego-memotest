// Inicialización de  variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;

let movimientos = 0;
let aciertos = 0;

const felicidadesMensaje = document.getElementById("felicidades");
const tablero = document.getElementById("tablero");

let mostrarMovimientos = document.querySelector("#movimientos");

const tiempoValor = document.querySelector("#tiempo");

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
let azarEmojis = emojis.sort(() => {
  return Math.random() - 0.5;
});
const $cuadro = document.querySelectorAll("#cuadro");

function destapar(id) {
  tarjetasDestapadas++;
  console.log(tarjetasDestapadas);

  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = azarEmojis[id];
    tarjeta1.innerHTML = primerResultado;

    // deshabilitar primer tarjeta
    tarjeta1.classList.add("disabled");
  } else if (tarjetasDestapadas == 2) {
    // mostrar segundo emoji
    tarjeta2 = document.getElementById(id);
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
      }
    } else {
      // Mostrar momentaneamente valores y volver a tapar
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.classList.remove("disabled");
        tarjeta2.classList.remove("disabled");
        tarjetasDestapadas = 0;
      }, 1000);
    }
  }
}
