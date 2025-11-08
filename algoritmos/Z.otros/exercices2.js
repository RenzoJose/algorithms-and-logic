// escirbir una funcion que reciba un arreglo de numeros y devuelva un nuevo array solo con numeros pares
// todo:
// 1. leer el arreglo tiene numeros y string
// 2. validar que sean numeros 
// 3. iterarlo numero verifcar que sea par 
// 4. nuevo array con numero pares 
// entrada
const number = [1, 2, 3, 4, "44", "33", "22"];


const even = (number) => number.filter( number => number % 2 === 0 ? number : `no se encontro numeros pares`).map( number => number * 1)
console.log( even( number ));   

    
      



   



