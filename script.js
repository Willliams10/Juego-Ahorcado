/* Lista de palabras con definición y categoría */
const words = [
  // Frutas
  { word: "pera", definition: "Fruta verde o amarilla, jugosa y dulce.", category: "Frutas" },
  { word: "platano", definition: "Fruta amarilla y alargada, rica en potasio.", category: "Frutas" },
  { word: "sandia", definition: "Fruta grande y verde por fuera, roja y dulce por dentro.", category: "Frutas" },
  { word: "naranja", definition: "Fruta cítrica de color naranja, rica en vitamina C.", category: "Frutas" },
  { word: "fresa", definition: "Fruta roja y pequeña con semillas en la superficie.", category: "Frutas" },
  
  // Animales
  { word: "tigre", definition: "Felino grande con rayas naranjas y negras.", category: "Animales" },
  { word: "jirafa", definition: "Animal alto con cuello largo y manchas en la piel.", category: "Animales" },
  { word: "delfin", definition: "Mamífero marino inteligente que salta en el agua.", category: "Animales" },
  { word: "leon", definition: "El rey de la selva, con gran melena.", category: "Animales" },
  { word: "tortuga", definition: "Reptil con caparazón que se mueve lentamente.", category: "Animales" },

  // Objetos
  { word: "reloj", definition: "Objeto que sirve para medir el tiempo.", category: "Objetos" },
  { word: "lapiz", definition: "Instrumento para escribir y dibujar, con mina de grafito.", category: "Objetos" },
  { word: "mesa", definition: "Mueble con superficie plana, usado para comer o trabajar.", category: "Objetos" },
  { word: "silla", definition: "Mueble con respaldo para sentarse.", category: "Objetos" },
  { word: "puerta", definition: "Elemento que permite entrar o salir de un lugar.", category: "Objetos" },

  // Naturaleza
  { word: "montana", definition: "Gran elevación de terreno, más alta que una colina.", category: "Naturaleza" },
  { word: "rio", definition: "Corriente de agua natural que fluye hacia el mar o un lago.", category: "Naturaleza" },
  { word: "nube", definition: "Masa de vapor de agua suspendida en el cielo.", category: "Naturaleza" },
  { word: "bosque", definition: "Gran extensión de árboles y vegetación.", category: "Naturaleza" },
  { word: "cielo", definition: "Espacio azul sobre la tierra donde están el sol y las estrellas.", category: "Naturaleza" },

  // Transporte
  { word: "carro", definition: "Vehículo de cuatro ruedas usado para transportarse.", category: "Transporte" },
  { word: "barco", definition: "Vehículo que navega por el agua.", category: "Transporte" },
  { word: "avion", definition: "Medio de transporte que vuela en el aire.", category: "Transporte" },
  { word: "tren", definition: "Vehículo que se mueve sobre rieles y transporta pasajeros o carga.", category: "Transporte" },
  { word: "bicicleta", definition: "Vehículo de dos ruedas que se mueve con pedales.", category: "Transporte" },

  // Colores
  { word: "rojo", definition: "Color de las fresas y las manzanas maduras.", category: "Colores" },
  { word: "azul", definition: "Color del cielo despejado y del mar.", category: "Colores" },
  { word: "verde", definition: "Color de las hojas de los árboles.", category: "Colores" },
  { word: "amarillo", definition: "Color del sol y de los plátanos maduros.", category: "Colores" },
  { word: "blanco", definition: "Color de la nieve y de las nubes.", category: "Colores" },

  // Profesiones
  { word: "doctor", definition: "Persona que cura enfermedades y cuida la salud.", category: "Profesiones" },
  { word: "maestro", definition: "Persona que enseña en la escuela.", category: "Profesiones" },
  { word: "bombero", definition: "Persona que apaga incendios y ayuda en emergencias.", category: "Profesiones" },
  { word: "policia", definition: "Persona que protege a los ciudadanos y hace cumplir la ley.", category: "Profesiones" },
  { word: "panadero", definition: "Persona que hace pan y pasteles.", category: "Profesiones" },

  // Partes del cuerpo
  { word: "cabeza", definition: "Parte superior del cuerpo donde está el cerebro.", category: "Cuerpo Humano" },
  { word: "ojos", definition: "Órganos que permiten ver.", category: "Cuerpo Humano" },
  { word: "boca", definition: "Parte del cuerpo usada para comer y hablar.", category: "Cuerpo Humano" },
  { word: "manos", definition: "Extremidades con dedos que permiten sujetar cosas.", category: "Cuerpo Humano" },
  { word: "piernas", definition: "Extremidades inferiores usadas para caminar y correr.", category: "Cuerpo Humano" },

  // Comida
  { word: "pan", definition: "Alimento hecho de harina y horneado.", category: "Comida" },
  { word: "queso", definition: "Producto lácteo derivado de la leche.", category: "Comida" },
  { word: "huevo", definition: "Alimento producido por las gallinas, rico en proteínas.", category: "Comida" },
  { word: "arroz", definition: "Grano blanco o marrón, base de muchas comidas.", category: "Comida" },
  { word: "sopa", definition: "Plato caliente hecho con caldo y otros ingredientes.", category: "Comida" },

  // Otros
  { word: "sol", definition: "Estrella que ilumina el día y da calor.", category: "Cielo" },
  { word: "luna", definition: "Satélite natural de la Tierra, visible en la noche.", category: "Cielo" },
  { word: "estrella", definition: "Objeto brillante en el cielo nocturno.", category: "Cielo" },
  { word: "playa", definition: "Lugar con arena junto al mar.", category: "Lugares" },
  { word: "escuela", definition: "Lugar donde los niños aprenden.", category: "Lugares" }
];

let selectedWord = "";
let selectedDefinition = "";
let selectedCategory = "";
let displayedWord = [];
let mistakes = 0;
const maxMistakes = 5;
let level = "easy";

/* Rutas de imágenes para cada estado del ahorcado */
const hangmanImages = [
  "imag/Arbol.png",
  "imag/Arbol+lazo.png",
  "imag/cabeza.png",
  "imag/cabeza y cuerpo.png",
  "imag/manos.png",
  "imag/completo.png"
];

/* Referencias a elementos del DOM */
const levelSelection = document.getElementById("levelSelection");
const startButton = document.getElementById("startButton");
const gameContainer = document.getElementById("gameContainer");
const hangmanImage = document.getElementById("hangmanImage");
const attemptsCounter = document.getElementById("attemptsCounter");
const wordContainer = document.getElementById("wordContainer");
const definitionContainer = document.getElementById("definitionContainer");
const categoryContainer = document.getElementById("categoryContainer");
const messageContainer = document.getElementById("messageContainer");
const exitButton = document.getElementById("exitButton");
const nextButton = document.getElementById("nextButton");
const letterTable = document.getElementById("letterTable");

/* Eventos */
startButton.addEventListener("click", startGame);
exitButton.addEventListener("click", exitGame);
nextButton.addEventListener("click", nextWord);

/* Inicia el juego */
function startGame() {
  // Obtener nivel seleccionado
  const levelRadios = document.getElementsByName("level");
  for (let radio of levelRadios) {
      if (radio.checked) {
          level = radio.value;
      }
  }

  // Reiniciar variables y contadores
  mistakes = 0;
  attemptsCounter.textContent = maxMistakes - mistakes;
  hangmanImage.src = hangmanImages[mistakes];
  messageContainer.textContent = "";

  // Ocultar menú y mostrar juego
  levelSelection.style.display = "none";
  gameContainer.style.display = "block";

  // Inicializar palabra y tabla de letras
  initWord();
  generateLetterTable();
}

/* Selecciona e inicializa una palabra aleatoria */
function initWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex].word.toUpperCase();
  selectedDefinition = words[randomIndex].definition;
  selectedCategory = words[randomIndex].category;

  // Mostrar la palabra con guiones bajos
  displayedWord = Array(selectedWord.length).fill("_");
  renderWord();

   // Mostrar hint según nivel
   if (level === "easy") {
    definitionContainer.textContent = "Definición: " + selectedDefinition;
    categoryContainer.textContent = "";
    document.getElementById("hintContainer").style.display = "block"; // Mostrar el hint
} else if (level === "advanced") {
    categoryContainer.textContent = "Campo: " + selectedCategory;
    definitionContainer.textContent = "";
    document.getElementById("hintContainer").style.display = "none"; // Ocultar el hint en difícil
}
}

/* Renderiza la palabra en pantalla */
function renderWord() {
  wordContainer.innerHTML = "";
  displayedWord.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("letter");
      wordContainer.appendChild(span);
  });
}

// Genera la tabla de letras
function generateLetterTable() {
  letterTable.innerHTML = ""; // Esto borra los botones anteriores

  const letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
  const table = document.createElement("div");
  table.classList.add("letter-grid");

  letters.forEach(letter => {
      const button = document.createElement("button");
      button.textContent = letter;
      button.classList.add("letter-button");
      button.disabled = false; // Asegurar que todos empiecen habilitados
      button.addEventListener("click", () => guessLetter(letter, button));
      table.appendChild(button);
  });

  letterTable.appendChild(table);
}

// Llamar a esta función cuando inicie el juego
startButton.addEventListener("click", () => {
  startGame();
  generateLetterTable(); // Genera la tabla de letras al inicio del juego
});
/* Procesa la letra seleccionada */
function guessLetter(letter, button) {
  let correct = false;

  // Verifica si la letra existe en la palabra
  for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter && displayedWord[i] === "_") {
          displayedWord[i] = letter;
          correct = true;
      }
  }

  // Deshabilita el botón después de seleccionarlo
  button.disabled = true;
  button.classList.add(correct ? "correct" : "incorrect");

  // Si la letra no es correcta, aumentar errores y actualizar imagen
  if (!correct) {
      mistakes++;
      attemptsCounter.textContent = maxMistakes - mistakes;
      updateHangman();
  }

  renderWord();
  checkGameStatus();
}

/* Actualiza la imagen del ahorcado */
function updateHangman() {
  hangmanImage.src = hangmanImages[mistakes];
}

/* Verifica si el jugador ganó o perdió */
function checkGameStatus() {
  if (!displayedWord.includes("_")) {
      messageContainer.textContent = "¡Felicidades! Has adivinado la palabra.";
      disableLetterButtons();
  } else if (mistakes >= maxMistakes) {
      messageContainer.textContent = "Lo siento, has perdido. La palabra era: " + selectedWord;
      revealWord();
      disableLetter();
      resetLetterTable();
      nextWord();
  }
}

function renderLetters() {
  lettersContainer.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement("button");
      button.textContent = letter;
      button.classList.add("letter-btn");
      button.addEventListener("click", () => guessLetter(letter, button));
      lettersContainer.appendChild(button);
  }
}
/* Muestra la palabra completa en caso de derrota */
function revealWord() {
  displayedWord = selectedWord.split("");
  renderWord();
}

/* Deshabilita los botones de letras */
function disableLetterButtons() {
  document.querySelectorAll(".letter-button").forEach(button => button.disabled = true);
}

/* Prepara la siguiente palabra */
function nextWord() {
  mistakes = 0;
  attemptsCounter.textContent = maxMistakes - mistakes;
  hangmanImage.src = hangmanImages[mistakes];
  messageContainer.textContent = "";

  // Reactivar todos los botones de letras
  document.querySelectorAll(".letter-button").forEach(button => {
      button.disabled = false;
  });

  initWord();
}

/* Función para salir del juego y recargar la página */
function exitGame() {
  location.reload();
}
document.addEventListener("DOMContentLoaded", () => {
  generateLetterTable();
});
document.addEventListener("DOMContentLoaded", function () {
  const easyMode = document.getElementById("easy");
  const advancedMode = document.getElementById("advanced");
  
  easyMode.addEventListener("change", function () {
      if (easyMode.checked) {
          document.body.style.backgroundColor = "#D4EDDA"; // Verde claro
      }
  });

  advancedMode.addEventListener("change", function () {
      if (advancedMode.checked) {
          document.body.style.backgroundColor = "#F8D7DA"; // Rojo claro
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const levelRadios = document.querySelectorAll('input[name="level"]');
  const menu = document.getElementById("levelSelection");

  levelRadios.forEach(radio => {
      radio.addEventListener("change", function () {
          if (this.value === "easy") {
              menu.style.background = "linear-gradient(135deg, #05c1f5, #fad0c4)"; // Verde menta
          } else if (this.value === "advanced") {
              menu.style.background = "linear-gradient(135deg,rgb(9, 12, 215), #DCEDC1)"; // Rojo a amarillo
          }
      });
  });
});

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("levelSelection").style.display = "none"; // Oculta el menú
    document.getElementById("gameContainer").style.display = "block"; // Muestra el juego
    document.getElementById("marioImage").style.display = "none"; // Oculta la imagen de Mario
});