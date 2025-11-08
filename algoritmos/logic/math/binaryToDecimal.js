
//* 🔹 Ejercicio 1: Número Binario a Decimal
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

//*metodo directo binario a decimal con metodo parseInt( binario, base )

const BinaryToDecimal = ( binary ) => {

    if ( !(/^[0-1]+$/.test(binary) )) return `Number Binary not valid`
    
    return parseInt(binary, 2)
    
}

console.log(BinaryToDecimal(1010));




//pasar un numero Entero a Binario 
function numberToBit(number) {

  if (!(Number.isInteger(number))) return `Enter an integer`
  if (number < 0 ) return `Enter a Valid Number `
  if ( number === 0 ) return 0

  let result   = '';

  while ( number > 0 ){

    let residue = number % 2;
      
    result  = residue + result;
    number  = Math.floor( number / 2 )

  }
  return result * 1
}

console.log(numberToBit('A'));




// formar corta Entero ---> Binario 
const numberToBit2 = ( number ) => {
return (
        !Number.isInteger(number) 
        ? `introduzca un numero valido`
        :  number === 0
        ? 0
        : number.toString(2)
    )
}
console.log(numberToBit2(4));



console.log((' ').toString(2));




// *🔹 Ejercicio 2: Decimal a Cualquier Base
// Crear una función que convierta un número decimal a cualquier base (2-16)
// Ejemplo: (255, 16) → "FF"
// analisis
// patron String de dígitos: "0123456789ABCDEF" contiene todos los símbolos posibles
// Residuo como índice: El residuo determina qué carácter usar
// Construcción inversa: Los residuos se agregan al inicio del resultado
//  Repetir con el cociente hasta que sea 0
// Casos especiales: Manejar el número 0 por separado

function decimalABase(numero, base) {

  if (!(Number.isInteger(numero))) return `Enter an integer`
  if (base < 2 || base > 16) return `Enter bases 2 - 16`
 
  const digits = '0123456789ABCDEF'
  let result  = '';
  
  while ( numero > 0 ) {

   let residue = numero % base;

    result  = digits[residue] + result;
    numero  = Math.floor( numero / base )

  }
  return result
}

console.log(decimalABase(10, 2));




// decimal a cualquier base de forma corta 

const parseoAll = ( number, base) => {

    if (!(Number.isInteger(number))) return `Enter an integer`
    if (!( /2|8|10|16/.test( base ) ) || !base ) return `Enter bases 2 - 16`
  

    return number.toString(base)

}

console.log(parseoAll(4, 2));


