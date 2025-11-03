

// 🔹Exercices 1: Sistema de Gestión de Biblioteca
// Trabajas en una biblioteca digital y necesitas buscar libros específicos en el inventario según diferentes criterios.
// Entrada:
const books = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, disponible: true },
  { id: 2, titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605, disponible: false },
  { id: 3, titulo: "1984", autor: "George Orwell", año: 1949, disponible: true },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, disponible: true }
];
// Tareas:
// 1. Encuentra el primer libro disponible publicado antes de 1950
// 2. Busca un libro por su ID específico (por ejemplo, ID 3)
// 3. Encuentra el primer libro cuyo título contenga la palabra "Don"
// Salida esperada:
//Tarea 1
// { id: 3, titulo: "1984", autor: "George Orwell", año: 1949, disponible: true }
// Tarea 2
// { id: 3, titulo: "1984", autor: "George Orwell", año: 1949, disponible: true }
// Tarea 3
// { id: 2, titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605, disponible

const firstBook = ( books ) => {
    // Tarea 1
    // return books.find( book => book.año < 1950 && book.disponible )
    // Tarea 2
    // return books.find( book => book.id === id )
    // Tarea 3
    return books.find(({ titulo }) => titulo.includes('Don') )
}
console.log( firstBook( books ));

// 🔹 Exercices 2: valor que no se repite
//  dada una cadena de string encuentra el primer caracter que no se repite 
const str = 'aaaaaaveeeecceeesss'

const firstCharacter = ( str ) => {
  const result = str.split('').find(( character, __ , array ) => 
    array.indexOf(character) === array.lastIndexOf(character) 
  )
    
  return result || null
}
console.log(firstCharacter(str));


// 🔹Exercices 3:
//  crear una funcion que reciba un numero entero y que retorne cuantos pares e impares hay en el numero 
// analisis
// si el numero entero que se recibe es par ---> siempre van a ver mitad pares y mitad impares !!
// en cambio si el numero es impar-----> siempre va haber un impar mas, es decir, la mitad mas 1, o lo mismo, el numero de entrada menos la cantidad de pares

// ejemplo: 
// entrada: 4 ---> por deduccion va haber 2 pares y 2 impares --> es decir la mitad
// siempre se repite la misma secuencia siempre y cuando el numero sea par
// cuando es impar: entrada: 5 ---> por deduccion va haber 2 pares y 3 impares
//  esto quiere decir que siempre que sea impar---> siempre va haber un impar demas que el numero de par 

const evenAndOdd = ( number ) => {
  let even = Math.floor(number / 2)
  return {
    even,
    odd: number - even
  }
}
console.log(evenAndOdd(5));

// operador bit a bit de desplazamiento a la derecha (>>) bitwise shift right
// n >> 1 es un bitwise shift right, que divide entre 2 y redondea hacia abajo (igual que Math.floor(n / 2) pero más corto).

const evenAndOdd2 = ( number ) => ( { even: number >> 1, odd: number - ( number >> 1 ) } )

console.log(evenAndOdd2(5));

// 🔹Exercices 4:
// crear una funcion que dado un numero entero y devuelva su equivalente en romano 
// limitante hasta el 3999
// TODO:
// 1. usar una estructura de datos que guarde string numero romano a su equivalente en numero entero hasta 3999
// 2. una vez tenida la data, buscar la forma de condicionar dado un numero hasta 3999 limitante 
// 3. aparatir de ese numero de entrada, buscar en la data su equivalente en string de romanoa y concatenar 

// data:
const dataRomans = {
  M   :1000,
  CM  :900,
  D   :500, 
  CD  :400,
  C   :100,
  XC  :90,
  L   :50,
  XL  :40,
  X   :10,
  IX  :9,
  V   :5,
  IV  :4,
  I   :1,
}
const romans = ( number ) =>{

  if ( !Number.isInteger(number) ) return `${ number } --> is not an integer`;
  if ( number <= 0 || number > 3999 ) return `Enter a Number between 0 and 3999`

  let numberRomans = '';

  for ( let [ romans, value ] of Object.entries(dataRomans) ){
    while ( number >= value ) {
    numberRomans += romans
    number -= value        
    }
  }
  return numberRomans ;
}

console.log(romans(41));


// 🔹 Ejercicio 1: Número a Palabras
// Crear una función que convierta un número (0-999) a su equivalente en palabras
// Ejemplo: 347 → "trescientos cuarenta y siete"


const dataNumbersToWords = {
  
  units: {
    0: 'cero',
    1: 'uno',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve'
  },
  
  unitTen: {
    10: 'diez',
    20: 'veinte',
    30: 'treinta',
    40: 'cuarenta',
    50: 'cincuenta',
    60: 'sesenta',
    70: 'setenta',
    80: 'ochenta',
    90: 'noventa'
  },
  
  special: {  // Del 11 al 29 (excepto 20)
    11: 'once',
    12: 'doce',
    13: 'trece',
    14: 'catorce',
    15: 'quince',
    16: 'dieciséis',
    17: 'diecisiete',
    18: 'dieciocho',
    19: 'diecinueve',
    21: 'veintiuno',
    22: 'veintidós',
    23: 'veintitrés',
    24: 'veinticuatro',
    25: 'veinticinco',
    26: 'veintiséis',
    27: 'veintisiete',
    28: 'veintiocho',
    29: 'veintinueve',
    100: 'ciento'
  },
  
  unitHundreds: {
    100: 'cien',
    200: 'doscientos',
    300: 'trescientos',
    400: 'cuatrocientos',
    500: 'quinientos',
    600: 'seiscientos',
    700: 'setecientos',
    800: 'ochocientos',
    900: 'novecientos'
  }
}


const changeToNumberofWords = ( number ) => {
 
  if ( number === undefined || number < 0 || number > 999 ) {
    return `Enter a valid Number Between 0 - 999`;
  }
  if ( number % 100 === 0 ) return dataNumbersToWords.unitHundreds[number] || dataNumbersToWords.units[0]

  let resultNumbersToWords  = '';
  const tenExtraction = number % 100;
  
  // 1 descomponer
  let unitHundred = Math.floor( number / 100 );
  let unitTen     = Math.floor( tenExtraction / 10 );
  let unit        = Math.floor( number % 10 );

   
  // 2. agrupar datos por unidad decena y centena 
  let wordUnitHundred = dataNumbersToWords.special[unitHundred * 100]
  let wordUnitTen     = dataNumbersToWords.unitTen[unitTen * 10]
  let wordUnit        = dataNumbersToWords.units[unit]
  let specialCase     = dataNumbersToWords.special

  // 3.concatenar por tipo
  // 3.1 caso centena 
  if ( unitHundred ){
    resultNumbersToWords += number > 100 && number < 200
    ? wordUnitHundred//entro directamente casos especiales de 100 'ciento'
    : dataNumbersToWords.unitHundreds[unitHundred * 100] // mayores o iguales a 200
  }  

  // 3.2 casos especiales decenas
  if ( specialCase[tenExtraction] ){
  return resultNumbersToWords //--> verifico si ya tiene valor(1 0 0)
  ? `${ resultNumbersToWords } ${ specialCase[tenExtraction] }`
  : specialCase[tenExtraction] // --> si no tienes unidad de cien, empieza unidad decena ( 0 1 0)

  }

// 3.3 caso decena
  if ( unitTen ) resultNumbersToWords += ( resultNumbersToWords ? ' ' : '' ) + wordUnitTen ;
    
// 3.4 caso unidad
  if ( unit ) {
    resultNumbersToWords +=
    ( unitTen ? ' y ' : resultNumbersToWords ? ' ': '') + wordUnit


  }

  return resultNumbersToWords
}

console.log(changeToNumberofWords(1));



// 🔹 Ejercicio 2: Convertidor de Tiempo
// Crear una función que convierta segundos a formato "HH:MM:SS"
// Ejemplo: 3661 → "01:01:01"


function segundosAHora(segundos) {

  if ( segundos >= 86400) return 'supera la capacidad de segundos en un dia'
  if ( segundos <= 0 || !Number.isInteger(segundos)) return 'introduzca un numero valido'

  let horas   = String(Math.floor(segundos / 3600)).padStart(2,'0')
  let minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2,'0')
  let segundo = String((segundos % 3600) % 60).padStart(2,'0')

  // analogia si para 0 a la izquierda
  // if (horas < 10 ) horas = '0' + horas;
  // if (minutos < 10 ) minutos = '0' + minutos;
  // if (segundo < 10 ) segundo  = '0' + segundo;
  
 return horas + ':' + minutos + ':'+ segundo

}



console.log( segundosAHora(86399));

// 🔹 Ejercicio 3: Número Binario a Decimal
// Crear una función que convierta un número binario (string) a decimal
// Ejemplo: "1010" → 10
// No usar parseInt con base

//  1. saber como funciona la tranformacion de bit a decimal: se eleva a potencia segun el numero de bit que tenga y se suma 
// entrada "1010"
// proceso:
// Asignar potencias:
//posicion  bit  potencia
//   1       1  * 2^{3}
//   2       0  * 2^{2} = 0
//   3       1  * 2^{1}
//   4       0  * 2^{0} = 0
// final sumo el resultado de esas multiplicaciones 
// note: validar que sea solo 0 y 1
// regex : /^[01]+$/
// / /--> busca 
// ^ --> desde el inicio
//  el patron [01]
//  --> uno mas caracteres del patron --> +
//  hasta el final --> $

function binarioADecimal( binario ) {
  binario = String(binario)
  if ( !(/^[0-1]+$/.test(binario)) ) return `el numero ingresado no es binario `;

  let result = 0;
  let reverseBit = binario.split('').reverse().join('');

  
  for( let i = 0; i < reverseBit.length ; i++ ){

    if ( reverseBit[i] === '1'){

      result += 2** i
    }

  }
  return result

}

console.log(binarioADecimal(1010));

// metodo directo 
const BinaryToDecimal = ( binary ) => {

  if ( !(/^[0-1]+$/.test(binary) )) return `Number Binary not valid`

  return parseInt(binary, 2)

}

console.log(BinaryToDecimal(1010));



// 🔹 Ejercicio 4: Decimal a Cualquier Base
// Crear una función que convierta un número decimal a cualquier base (2-16)
// Ejemplo: (255, 16) → "FF"
// analisis
// String de dígitos: "0123456789ABCDEF" contiene todos los símbolos posibles
// Residuo como índice: El residuo determina qué carácter usar
// Construcción inversa: Los residuos se agregan al inicio del resultado
//  Repetir con el cociente hasta que sea 0
// Casos especiales: Manejar el número 0 por separado

function decimalABase(numero, base) {

  if (!(Number.isInteger(numero))) return `Enter an integer`
  if (base < 2 || base > 16) return `Enter bases 2 - 16`
  const digits = '0123456789ABCDEF'
  let result  = '';
  let residue = 0;

  while ( numero > 0 ){
    residue = numero % base;

    result  = digits[residue] + result;
    numero  = Math.floor( numero / base )

  }
  return result
}

console.log(decimalABase(10, 2));


// pasar un numero entero a binario 
function numberToBit(number) {

  if (!(Number.isInteger(number))) return `Enter an integer`
  if (number < 0 ) return `Enter a Valid Number `
  if ( number === 0 ) return 0

  let result   = '';
  let residue  = 0;

  while ( number > 0 ){
    residue = number % 2;
    result  = residue + result;
    number  = Math.floor( number / 2 )

  }
  return result * 1
}

console.log(numberToBit(105));

// formar corta 
const numberToBit2 = ( number ) => Number.isInteger(number) && number >= 0 ? number.toString(16) : `Number Not Valid`

console.log(numberToBit2(255));



// para pasarlo a cualquier base de forma corta 

const parseoAll = ( number, base ) => {

  return [number.toString(base), parseInt(number.toString(base), base)]


}

console.log(parseoAll(15,16));








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
  XL  :40,
  X   :10,
  IX  : 9,
  V   : 5,
  IV  : 4,
  I   : 1
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



