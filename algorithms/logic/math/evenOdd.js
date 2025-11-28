// 🔹Exercices 1:
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



// 🔹Exercices 2 escirbir una funcion que reciba un arreglo de numeros y devuelva un nuevo array solo con numeros pares
// todo:
// 1. leer el arreglo tiene numeros y string
// 2. validar que sean numeros 
// 3. iterarlo numero verifcar que sea par 
// 4. nuevo array con numero pares 
// entrada
const number = [1, 2, 3, 4, "44", "33", "22"];


const even = (number) => number.filter( number => number % 2 === 0 ? number : `no se encontro numeros pares`).map( number => number * 1)
console.log( even( number ));   

    
      
