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
// contarPalabras("hola mundo hola")
// { hola: 2, mundo: 1 }


const counterWords = ( words ) => {
    let cleanWords = '';
    const result = {};

    for (const letter of words) {
        if ( letter !== '' && !['.', ',', '!', '?',].includes(letter)) {
            cleanWords += letter
        }
      
    } 
    cleanWords.split(' ').forEach( phrase => result[phrase] = result[phrase] ? result[phrase] + 1 : 1)


  
    return result
}
console.log(counterWords('JavaScript es genial. JavaScript es poderoso!'));


// contarPalabras("JavaScript es genial. JavaScript es poderoso!")
//{ javascript: 2, es: 2, genial: 1, poderoso: 1 }

// contarPalabras("el gato y el perro")
// { el: 2, gato: 1, y: 1, perro: 1 }

const counterWordsTwo = ( words ) => {
    let cleanWords = '';
    const result = {};

    for (const letter of words) {
        if ( letter !== '' && !['.', ',', '!', '?',].includes(letter)) {
            cleanWords += letter
        }
      
    } 
    cleanWords.split(' ').forEach( phrase => result[phrase] = result[phrase] ? result[phrase] + 1 : 1)


  
    return result
}
console.log(counterWordsTwo('JavaScript es genial. JavaScript es poderoso!'));





// contarPalabras("")
// {}
// Casos de prueba adicionales:
// javascriptcontarPalabras("Hola HOLA hola") 
// { hola: 3 }

// contarPalabras("uno, dos, tres, uno.")
// { uno: 2, dos: 1, tres: 1 }

//* Ejercicio 2: Agrupar Estudiantes por Calificación
// Contexto del problema:
// Eres profesor y tienes una lista de estudiantes con sus calificaciones. Necesitas agruparlos por letra de calificación (A, B, C, D, F) para generar un reporte de rendimiento del curso.
// Entrada:
// Array de objetos, cada uno con nombre (string) y nota (número entre 0-100)
// Salida esperada:
// Objeto donde las claves son las letras (A, B, C, D, F) y los valores son arrays con los nombres de estudiantes
// const estudiantes2 = [
//   { nombre: "Juan", nota: 90 },
//   { nombre: "Sofia", nota: 91 },
//   { nombre: "Carlos", nota: 65 }
// ];

// SALIDA ESPERADA
// agruparPorCalificacion(estudiantes1)
// {
//   A: ["Ana"],
//   B: ["Luis"],
//   C: ["María"],
//   D: [],
//   F: ["Pedro"]
// }

// agruparPorCalificacion(estudiantes2)
// {
//   A: ["Juan", "Sofia"],
//   B: [],
//   C: [],
//   D: ["Carlos"],
//   F: []
// }

// Criterios de calificación:
const qualification = {
    A: [90, 100],
    B: [80, 89],
    C: [70, 79],
    D: [60, 69],
    F: [0, 59],
}
// Entrada
const estudents = [
  { name: "Ana", qualification: 95 },
  { name: "Luis", qualification: 82 },
  { name: "María", qualification: 78 },
  { name: "Pedro", qualification: 55 }
];


const studentByGrade = ( students ) => {
    const result = {};

    students.forEach( student => {
        
        for (const [grade, [min, max]] of Object.entries(qualification) ) {
           
            if ( student.qualification >= min && student.qualification <= max){
                
                if (!result[grade]) result[grade] = [];
                
                result[grade].push(student.name)
            }
            
        }
           
        
    });
  
   
    return result


}

console.log(studentByGrade(estudents));





const studentByGradeReduce = ( students ) => {
    return students.reduce(( result, student ) => {

        for (const [grade,[min, max]] of Object.entries(qualification)) {

            if(student.qualification >= min && student.qualification <= max){
                if (!result[grade]) result[grade] = [];
                result[grade].push(student.name)                
            } 
            
        }
       return result
    },{})

}

console.log(studentByGradeReduce(estudents));



const studentByGradeFind = ( students ) => {
    return students.reduce(( result, student ) => {
        return Object.entries(qualification).find(( [grade, [min, max]]) =>
            student.qualification >= min && student.qualification <= max
        )
      
    },{})

}

console.log(studentByGradeFind(estudents));



//* Ejercicio 3: Inventario de Productos (Carrito de Compras)
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
const carrito = [
  { id: "P001", nombre: "Laptop", precio: 1000 },
  { id: "P002", nombre: "Mouse", precio: 25 },
  { id: "P001", nombre: "Laptop", precio: 1000 },
  { id: "P002", nombre: "Mouse", precio: 25 }
];

const shoppingCart = ( products ) => {
    if ( !products || products.length === 0 ) return `el carrito esta vacio` ;
    
    return products.reduce((result, { id, nombre, precio }) =>{
        if (!result[id]) {
            result[id] = {
                nombre,
                cantidad: 1,
                precioUnitario: precio,
                subtotal: precio,
            }
        }else{
            result[id].cantidad++;
            result[id].subtotal += precio;
        }

        return result

    }, {})
 
}

console.log(shoppingCart(carrito));

// consolidarCarrito(carrito1)
// {
//   P001: { nombre: "Laptop", cantidad: 2, precioUnitario: 1000, subtotal: 2000 },
//   P002: { nombre: "Mouse", cantidad: 2, precioUnitario: 25, subtotal: 50 }
// }




const carrito2 = [
  { id: "A100", nombre: "Teclado", precio: 50 },
  { id: "A100", nombre: "Teclado", precio: 50 },
  { id: "A100", nombre: "Teclado", precio: 50 }
];

const shoppingCartFull = ( products ) => {
    
    const result = {};
    
    products.forEach(({ id, nombre, precio }) => {
        
        if (result[id]) {
            result[id].cantidad++;
            result[id].subtotal += precio;
            
        } else {
            
            result[id] = {
                nombre,
                cantidad: 1,
                precioUnitario: precio,
                subtotal: precio,
            }
        }
        
    })
    return result

}

console.log(shoppingCartFull(carrito2));

// consolidarCarrito(carrito2)
// {
//   A100: { nombre: "Teclado", cantidad: 3, precioUnitario: 50, subtotal: 150 }
// }

// Caso adicional con Map():
const carrito3 = [
  { id: "X001", nombre: "Libro", precio: 15 }
];
// { X001: { nombre: "Libro", cantidad: 1, precioUnitario: 15, subtotal: 15 } }



const shoppingCartMap = ( productsCart )=>{
    
    const resultMap = new Map();

    productsCart.forEach(({id, nombre, precio }) => {
        if (!resultMap.has(id)){

            resultMap.set(id, { 
                nombre,
                cantidad: 1,
                precioUnitario: precio,
                subtotal:precio
            })
        } else {

            resultMap.get(id).cantidad++;
            resultMap.get(id).subtotal *= resultMap.get(id).cantidad
        }



    })

    return resultMap

}

console.log(shoppingCartMap(carrito));





// carrito.forEach(p => {
//   if (!resultadoMap.has(p.id)) {
//     resultadoMap.set(p.id, { nombre: p.nombre, cantidad: 0, precioUnitario: p.precio, subtotal: 0 });
//   }
//   const item = resultadoMap.get(p.id);
//   item.cantidad += 1;
//   item.subtotal = item.cantidad * item.precioUnitario;
// });

// const resultadoObj = Object.fromEntries(resultadoMap);
// console.log(resultadoObj);














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
  // Actualizar resultado[clave]
// }
// return resultado;
// ¡Intenta resolverlos y experimenta con diferentes enfoques!