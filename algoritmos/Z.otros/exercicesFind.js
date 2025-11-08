
// 🔹 Ejercicio 5: Convertidor de Monedas con Billetes
// Crear una función que dado un monto, devuelva la cantidad mínima de billetes
// Billetes disponibles: 100, 50, 20, 10, 5, 1
// Ejemplo: 287 → {100: 2, 50: 1, 20: 1, 10: 1, 5: 1, 1: 2}

function contarBilletes(monto) {
  // Tu código aquí
}

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
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D',
    '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
    '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
    '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z'
  };
  // Tu código aquí
}

// 🔹 Ejercicio 8: Convertidor de Temperatura
// Crear una función que convierta entre Celsius, Fahrenheit y Kelvin
// Ejemplo: (100, "C", "F") → 212

function convertirTemperatura(valor, desde, hacia) {
  // Tu código aquí
}

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

function calcularEAN13(codigo12digitos) {
  // Tu código aquí
}

// 🔹 Ejercicio 12: Convertidor de Fechas Julianas
// Crear una función que convierta una fecha a días julianos (desde el 1 enero 4713 AC)
// Ejemplo: new Date(2000, 0, 1) → 2451545

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
  M   : 1000,
  CM  : 900,
  D   : 500,
  CD  : 400,
  C   : 100,
  XC  : 90,
  L   : 50,
  XL  : 40,
  X   : 10,
  IX  : 9,
  V   : 5,
  IV  : 4,
  I   : 1,
}

const changeNumberRoman = ( number ) => {

  if ( !Number.isInteger(number) || number < 1 || number > 3999  ) return `ingresa un numero valido entre 0 - 3999`;

  let numeroRoman = '';

  for ( let [ roman, value ] of Object.entries(romanos)){
       
    while (number >= value) {

      numeroRoman +=  roman ;

      number -= value

    }
  }

  return numeroRoman
}

console.log(changeNumberRoman(25));



// Un gusano está en el fondo de un pozo de 10 metros de profundidad.
// Cada día sube 3 metros, pero durante la noche resbala 2 metros.
// ¿Cuántos días necesita para salir del pozo?
// 💡 Datos

// Profundidad del pozo H = 10

// Subida diaria A = 3

// Resbalón nocturno B = 2


// const wronCaseExit = ( depth, dailyRaise, nightSlide ) => {
//   let position    = 0;
//   let counterDay  = 0;
//   if ( depth <= 0 || dailyRaise >= depth)return `no hay dezplamiento con esos valores profundida es ${depth} y dezplamiento es ${dailyRaise}`
 
//   while ( depth > position ) {

//     counterDay++
//     position +=  dailyRaise 
  
//     if ( position >= depth ) return counterDay;
     
//     position -= nightSlide
  
//   }

// } ; 

 const wronCaseExit = ( depth, dailyRaise, nightSlide ) => {
 return Math.ceil(( depth - dailyRaise ) / ( dailyRaise - nightSlide ) + 1) 

} ; 
console.log( wronCaseExit(10, 3, 2)  )






//** Ejercicio 1: Estadísticas de texto avanzadas ***//
// Analizar un array de oraciones y obtener estadísticas completas
// Entrada:
const sentences = [
  "JavaScript es geñial",
  "Me encanta programar en JavaScript",
  "Reduce es muy poderoso",
  "JavaScript JavaScript JavaScript"
];
// Salida esperada:
// {
//   totalWords: 15,
//   uniqueWords: 9,
//   wordFrequency: { javascript: 5, es: 2, genial: 1, me: 1, encanta: 1, ... },
//   longestWord: "javascript",
//   averageWordLength: 6.15, ---> totalpalabras / cantidad
//   sentenceCount: 4--- > oranciones 
// }


const reportMetrics = ( array ) => {

  const totalwords = array.map( element => element.split(' ').length).reduce( (acc, curr) => acc + curr )

  let uniqueWords = [];
  for ( const item of array ){
    
    let splitItems = item.split(' ');
    uniqueWords = [...uniqueWords, ...splitItems]
    console.log(splitItems);
  }


  const wordFrequency =  uniqueWords.reduce(( acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc
  }, {})

  const longestWord = uniqueWords.map( item => item.length ).sort( (a, b) => b - a )[0]

  const averageWordLength = uniqueWords.map( item => item.length )
  .reduce( (acc, curr, index, array) => {
    
   return index === array.length - 1 ? ((acc + curr ) / array.length).toFixed(2) * 1 : acc + curr
   
  }) 
  console.log(averageWordLength);
  

  const sentenceCount = array.length
  

  let resultUniqueWords = [...new Set(uniqueWords)].length


  return {
    totalwords,
    resultUniqueWords,
    wordFrequency,
    longestWord,
    averageWordLength,
    sentenceCount,
  }
  

}

console.log(reportMetrics(sentences));



