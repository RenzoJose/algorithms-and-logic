// 🔹 Ejercicio 5: Convertidor de Monedas con Billetes
// Algoritmo Greedy
// Crear una función que dado un monto, devuelva la cantidad mínima de billetes
// Billetes disponibles: 100, 50, 20, 10, 5, 1
// Ejemplo: 287 → {100: 2, 50: 1, 20: 1, 10: 1, 5: 1, 1: 2}

// ?(Algoritmo Greedy)
// La idea es usar un enfoque codicioso (greedy): siempre tomar el billete de mayor valor posible primero.
// Pasos lógicos:
// 1. Crear un arreglo con las denominaciones ordenadas de mayor a menor: [100, 50, 20, 10, 5, 1]
// 2. Crear un objeto vacío para almacenar los resultados (cantidad de cada billete)
// 3. Iterar sobre cada denominación:

// preguntas
// Calcular cuántos billetes de esa denominación caben en el monto restante
// Si caben al menos 1, guardar esa cantidad en el objeto resultado
// Restar del monto el valor que ya "gastaste" en esos billetes

// 4. Repetir hasta procesar todas las denominaciones
// Operaciones clave:

// División entera (Math.floor() o operador ~~): para saber cuántos billetes caben

// Ejemplo: 287 / 100 = 2.87 → 2 billetes de 100

// Módulo (%): para obtener el resto después de usar los billetes

// Ejemplo: 287 % 100 = 87 (lo que queda por descomponer)

// Flujo mental con el ejemplo 287:

// 287 ÷ 100 = 2 billetes → quedan 87
// 87 ÷ 50 = 1 billete → quedan 37
// 37 ÷ 20 = 1 billete → quedan 17
// 17 ÷ 10 = 1 billete → quedan 7
// 7 ÷ 5 = 1 billete → quedan 2
// 2 ÷ 1 = 2 billetes → quedan 0 ✓

const amountInBills = (amount) => {
  const { resul } = [100, 50, 20, 10, 5, 1].reduce(
    (acc, curr) => {
      let searchBill = Math.floor(acc.remaining / curr);
      if (searchBill) {
        acc.resul[curr] = searchBill;
      }
      acc.remaining %= curr;
      return acc;
    },
    { resul: {}, remaining: amount },
  );

  return resul;
};

console.log(amountInBills(541));

//! otra solucion
const moneyCounter = (amount) => {
  let remaining = amount;
  const result = {};

  [100, 50, 20, 10, 5, 1].forEach((currency) => {
    let countercurrency = Math.floor(remaining / currency);

    if (countercurrency) result[currency] = countercurrency;

    remaining = remaining % currency;
  });

  return result;
};

console.log(moneyCounter(25));

//Escribir un programa que pida números , si el número es multiplo de 3, mostrar la palabra "fiz"
//si el número es multiplo de 5 , mostrar la plabra "Buzz",
//si el número es multiplo de 3 y 5 al mismo tiempo mostrar "Fizzbuzz"
//En cualquier otro caso , mostrar número normal

const showPhraseForNumber = (number) => {
  if (!number || typeof number === "string") return `Enter Number valid`;

  return Number.isInteger(number / 3) && Number.isInteger(number / 5)
  ? `FizzBuzz`
  : Number.isInteger(number / 3)
  ? `Fiz`
  : Number.isInteger(number / 5)
  ? `Buzz`
  : number;
};

console.log(showPhraseForNumber(25));



// 🔹 Ejercicio 6: Codificador César
// Crear una función que codifique un texto usando cifrado César (desplazamiento)
// Ejemplo: ("HOLA", 3) → "KROD"

function cifradoCesar(texto, desplazamiento) {
  // Tu código aquí
}

// 🔹 Ejercicio 7: Decodificador de Código Morse
// Crear una función que convierta código morse a texto
// Ejemplo: ".... --- .-.. .-" → "HOLA"

function morseATexto(morse) {
  const codigoMorse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  };

  const codeMorses = morse.split(" ");
  console.log(morse);
  console.log(codeMorses);
  
  
  let result = "";
  for (let codeMorse of codeMorses) {
    for (let [key, value] of Object.entries(codigoMorse)) {
      if (codeMorse === key) {
        result += value;
      }
    }
  }

  return result;
}

console.log(morseATexto(". -- .. - .-"));

// 🔹 Ejercicio 8: Convertidor de Temperatura
// Crear una función que convierta entre Celsius, Fahrenheit y Kelvin
// Ejemplo: (100, "C", "F") → 212

function convertirTemperatura(value = 1, from = "C", to = "F") {

  if (typeof value !== "number") return `Enter a valid number`;

  const tempFrom = from.toUpperCase(), tempTo = to.toUpperCase();

  if (!/C|F|K/.test(tempFrom) || !/C|F|K/.test(tempTo))
    return `Enter a valid conversion letter: C, F, K`;

  const result =
    tempFrom === "C" && tempTo === "F"
      ? `${value * (9 / 5) + 32} °F `
      : tempFrom === "F" && tempTo === "C"
        ? `${(value - 32) * (5 / 9)} °C`
        : tempFrom === "C" && tempTo === "K"
          ? ` ${value + 273.15} °K`
          : tempFrom === "K" && tempTo === "C"
            ? `${value - 273.15} °C`
            : tempFrom === "F" && tempTo === "K"
              ? `${(value - 32) * (5 / 9) + 273.15} °K`
              : `${(value - 273.15) * (9 / 5) + 32} °F`;

  return result.replace(/(-?\d+\.\d{0,1})\d*/, "$1");
}

console.log(convertirTemperatura( 1, "ñ", "F") );

// 🔹 Ejercicio 9: Número a Sistema Maya
// Crear una función que convierta un número decimal (0-7999) a sistema vigesimal Maya
// Usa símbolos: punto (1), raya (5)
// Ejemplo: 8 → ["...---"]

function numeroAMaya(num) {
  // Tu código aquí
}

// 🔹 Ejercicio 10: Conversor de Unidades de Almacenamiento
// Crear una función que convierta entre B, KB, MB, GB, TB
// Ejemplo: (1024, "KB", "MB") → 1

function convertirAlmacenamiento(valor, desde, hacia) {
  // Tu código aquí
}

// 🔹 Ejercicio 11: Generador de Código de Barras (EAN-13)
// Crear una función que valide y calcule el dígito verificador de un código EAN-13
// Ejemplo: "978014300723" → "9780143007234"

function calcularEAN13(codigo12digitos) {}

// 🔹 Ejercicio 12: Convertidor de Fechas Julianas
// Crear una función que convierta una fecha a días julianos (desde el 1 enero 4713 AC)
// Ejemplo: new Date(2000, 0, 1) → 2451545

function fechaADiaJuliano(fecha) {}
// function fechaADiaJuliano(fecha) {
//   // Tu código aquí
// }

// const cadena = "El veloz zorro marrón salta sobre el perro perezoso";
// const letras = cadena.toLowerCase().match(/[a-z]/gi)

// const unique = new Set( letras )
// console.log(unique);

// escribre una funcion que reciba numeros enteros y que lo combierta en romanos hasta 3999

// analisis
const romanos = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertToRoman = (number) => {

  let result = "";
  for ( let [ key, value] of Object.entries(romanos) ) {
    while (number >= value) {
      result += key;
      number -= value;
    }
  }

  return result;
}
console.log(convertToRoman(1));





const productos = [
  { nombre: "Camiseta", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Gorra", precio: 15 },
];
// Primero, usa .filter() para crear un nuevo array con solo los productos que cuestan más de 30.

// Luego, usa .some() sobre ese nuevo array para comprobar si alguno cuesta más de 50.

const searchProduct = (productos) => {
  const products30 = productos.filter(({ precio }) => precio > 30);

  return products30.some((producto) => producto.precio > 50);
};

console.log(searchProduct(productos));

// Enunciado: Tienes un array de objetos que representan libros.
// Cada objeto tiene las propiedades titulo (string),
// autor (string) y calificacion (number, del 1 al 10).

// pasos
// 1. crear una funcion para filtar los libreo calificacion >= 8
// 2. luego transformar los titulos en mayuscula

// retorno
// Tu tarea es crear una función que, dado este array, devuelva un nuevo
// array que contenga solo los títulos de los libros que tienen una calificación
// mayor o igual a 8, pero escritos en mayúsculas.

const books = [
  { titulo: "El Principito", calificacion: 9 },
  { titulo: "Cien Años de Soledad", calificacion: 7.5 },
  { titulo: "blanca nieves", calificacion: 8.2 },
];

const bestBooks = (books) =>
  books
    .filter(({ calificacion }) => calificacion >= 8)
    .map((book) => ({
      ...book,
      titulo: book.titulo.toUpperCase(),
    }));

console.log(bestBooks(books));

