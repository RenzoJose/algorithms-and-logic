
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




// 🔹 Ejercicio 2 
// Encontrar el producto más caro
// De una lista de productos con su precio, encuentra cuál es el producto más caro.

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 5000 },
  
];
// Producto más caro: Laptop - $1200
// analisis
// 1. usar  preciocaro >= precio 

const productExpense2 = ( arrayProducts ) => {

  const { nombre, precio } = arrayProducts.reduce(( acc, curr ) => {
    if ( curr.precio >  acc.precio  ){
      acc = curr
    }
    return acc
  })

  return `${ nombre } - $${ precio }`
}
console.log( productExpense2( productos ));

//! solucion 2
const productExpense = ( arrayProducts ) => {
  const sortProducts = arrayProducts.toSorted(( a, b ) => b.precio - a.precio )
  const { nombre, precio } = sortProducts[0]   
  
  return ` ${nombre} - $${ precio }`
}
console.log( productExpense( productos ));

