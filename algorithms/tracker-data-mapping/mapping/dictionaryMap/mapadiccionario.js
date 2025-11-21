// Ejercicios con Mapas/Diccionarios en JavaScript
// Los mapas o diccionarios (objetos {} o Map) son estructuras que almacenan pares clave-valor, perfectos para búsquedas rápidas, conteo de frecuencias y agrupación de datos.
// Conceptos Clave
// Usando objetos literales
// const diccionario = {};
// diccionario['clave'] = 'valor';

// Usando Map (más moderno)
// const mapa = new Map();
// mapa.set('clave', 'valor');
// mapa.get('clave'); // 'valor'

// Ejercicio 1: Contador de Frecuencias de Palabras
// Contexto del problema:
// Estás desarrollando un sistema de análisis de texto para un blog. Necesitas contar cuántas veces aparece cada palabra en un texto para generar estadísticas de contenido y palabras más usadas.
// Entrada:
// texto: string con un párrafo o frase
// Las palabras están separadas por espacios
// Ignora mayúsculas/minúsculas
// Ignora signos de puntuación básicos (. , ! ?)

// Salida esperada:

// Un objeto donde las claves son las palabras y los valores son la cantidad de veces que aparecen

// Ejemplos:
// javascriptcontarPalabras("hola mundo hola")
// { hola: 2, mundo: 1 }

// contarPalabras("JavaScript es genial. JavaScript es poderoso!")
//{ javascript: 2, es: 2, genial: 1, poderoso: 1 }

// contarPalabras("el gato y el perro")
// // { el: 2, gato: 1, y: 1, perro: 1 }

// contarPalabras("")
// // {}
// Casos de prueba adicionales:
// javascriptcontarPalabras("Hola HOLA hola") 
// // { hola: 3 }

// contarPalabras("uno, dos, tres, uno.")
// // { uno: 2, dos: 1, tres: 1 }

// Ejercicio 2: Agrupar Estudiantes por Calificación
// Contexto del problema:
// Eres profesor y tienes una lista de estudiantes con sus calificaciones. Necesitas agruparlos por letra de calificación (A, B, C, D, F) para generar un reporte de rendimiento del curso.
// Criterios de calificación:
const note = {
    A: [90, 100],
    B: [80, 89],
    C: [70,79],
    D: [60,69],
    F: [0,59],
}
// Entrada:

// Array de objetos, cada uno con nombre (string) y nota (número entre 0-100)

// Salida esperada:
// Objeto donde las claves son las letras (A, B, C, D, F) y los valores son arrays con los nombres de estudiantes

// Ejemplos:
// javascriptconst estudiantes1 = [
//   { nombre: "Ana", nota: 95 },
//   { nombre: "Luis", nota: 82 },
//   { nombre: "María", nota: 78 },
//   { nombre: "Pedro", nota: 55 }
// ];

// agruparPorCalificacion(estudiantes1)
// {
//   A: ["Ana"],
//   B: ["Luis"],
//   C: ["María"],
//   D: [],
//   F: ["Pedro"]
// }

// const estudiantes2 = [
//   { nombre: "Juan", nota: 90 },
//   { nombre: "Sofia", nota: 91 },
//   { nombre: "Carlos", nota: 65 }
// ];

// agruparPorCalificacion(estudiantes2)
// {
//   A: ["Juan", "Sofia"],
//   B: [],
//   C: [],
//   D: ["Carlos"],
//   F: []
// }

// agruparPorCalificacion([])
// { A: [], B: [], C: [], D: [], F: [] }
// Casos edge:
// javascriptconst estudiantes3 = [
//   { nombre: "Alex", nota: 100 },
//   { nombre: "Ben", nota: 0 },
//   { nombre: "Clara", nota: 80 }
// ];
// { A: ["Alex"], B: ["Clara"], C: [], D: [], F: ["Ben"] }

// Ejercicio 3: Inventario de Productos (Carrito de Compras)
// Contexto del problema:
// Estás construyendo un sistema de carrito de compras para un e-commerce. Los usuarios pueden agregar el mismo producto varias veces. Necesitas consolidar los productos para mostrar cuántas unidades de cada producto hay en el carrito y el total por producto.
// Entrada:

// Array de objetos, cada uno representa un producto agregado al carrito
// Cada objeto tiene: id (string), nombre (string), precio (número)
// El mismo producto puede aparecer múltiples veces en el array

// Salida esperada:

// Objeto donde las claves son los IDs de productos y los valores son objetos con:

// nombre: nombre del producto
// cantidad: número de unidades
// precioUnitario: precio de una unidad
// subtotal: cantidad × precioUnitario



// Ejemplos:
// javascriptconst carrito1 = [
//   { id: "P001", nombre: "Laptop", precio: 1000 },
//   { id: "P002", nombre: "Mouse", precio: 25 },
//   { id: "P001", nombre: "Laptop", precio: 1000 },
//   { id: "P002", nombre: "Mouse", precio: 25 }
// ];

// consolidarCarrito(carrito1)
// // {
// //   P001: { nombre: "Laptop", cantidad: 2, precioUnitario: 1000, subtotal: 2000 },
// //   P002: { nombre: "Mouse", cantidad: 2, precioUnitario: 25, subtotal: 50 }
// // }

// const carrito2 = [
//   { id: "A100", nombre: "Teclado", precio: 50 },
//   { id: "A100", nombre: "Teclado", precio: 50 },
//   { id: "A100", nombre: "Teclado", precio: 50 }
// ];

// consolidarCarrito(carrito2)
// // {
// //   A100: { nombre: "Teclado", cantidad: 3, precioUnitario: 50, subtotal: 150 }
// // }

// consolidarCarrito([])
// // {}
// Caso adicional:
// javascriptconst carrito3 = [
//   { id: "X001", nombre: "Libro", precio: 15 }
// ];
// // { X001: { nombre: "Libro", cantidad: 1, precioUnitario: 15, subtotal: 15 } }

// Consejos para Resolver

// Ejercicio 1: Usa .toLowerCase() y .replace() para limpiar el texto. Divide con .split() y recorre con un bucle.
// Ejercicio 2: Crea una función auxiliar que convierta nota numérica a letra. Inicializa el objeto resultado con todas las letras vacías.
// Ejercicio 3: Usa el id como clave. Verifica si ya existe en el diccionario con if (diccionario[id]) para actualizar o crear nuevo.

// Patrón común en los tres ejercicios:
// javascriptconst resultado = {};
// for (let elemento of array) {
//   const clave = /* extraer clave del elemento */;
//   if (!resultado[clave]) {
//     resultado[clave] = /* valor inicial */;
//   }
//   // Actualizar resultado[clave]
// }
// return resultado;
// ¡Intenta resolverlos y experimenta con diferentes enfoques!