
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

console.log(changeToNumberofWords(102));
