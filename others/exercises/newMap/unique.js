// 🟢 1. Nivel Fácil – Contar ocurrencias (analytics básico)
// En una tienda online quieres contar cuántas veces se vendió cada producto en una lista de ventas.
// Entrada
const sales = ["Mouse", "Mouse", "Keyboard", "Laptop", "Mouse", "Laptop"];
// 🎯 Objetivo
// Construir un Map donde:
// clave: nombre del producto
// valor: cantidad vendida

// ✔ Salida esperada
// Map {
//   "Mouse" => 3,
//   "Keyboard" => 1,
//   "Laptop" => 2
// }
//! con un objeto literal normal
const ObjectLiteral = (sales) => {
  const object = {};

  sales.forEach( product => {

    if(!object[product]){

      object[product] = 1;

    } else {

      object[product]++

    }

  });

  return object

}
console.log(ObjectLiteral(sales));


//! con new Map()
const saleOfProducts = ( sales ) => {

  const result = new Map();

  sales.forEach( product => {
    if (result.has(product)){
      result.set(product, result.get(product) + 1 )
    } else {
      result.set(product, 1) 
    }
  });


  return result
}
console.log(saleOfProducts(sales));


//! otra solucion de Map si condicional If, pero crea muchas copias y consum mucha memoria

const saleOfProductsReduce = (sales) => 
sales.reduce((acc, product) => 
  new Map([
    ...acc,
    [product, (acc.get(product) || 0) + 1]
  ])

, new Map())

console.log(saleOfProductsReduce(sales));
// todo remenber notes:
// Map no necesita if para decidir si sobreescribir una key
// La última entrada prevalece
// Funciona perfecto para operaciones inmutables


// 🟡 2. Nivel Intermedio – Eliminar duplicados por id
// Recibes datos desde una API donde pueden venir productos repetidos pero quieres una lista única, priorizando el último valor recibido (como en una tabla de inventario).

// 🧠 Entrada
const items = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 1, name: "Laptop v2" },
  { id: 3, name: "Keyboard" }
];
// Generar una lista única usando Map.
// Cada siguiente duplicado sobrescribe al anterior.
// ✔ Salida esperada
// [
//   { id: 1, name: "Laptop v2" },
//   { id: 2, name: "Mouse" },
//   { id: 3, name: "Keyboard" }
// ]


const uniqueList = ( data ) => {
  const result = new Map();
  data.forEach((dataItem) => {
   result.set(dataItem.id, {...dataItem}) 
  })
  return Array.from(result.values())
} 
console.log(uniqueList(items));



// operaiones inmutabable aplicando Object Map y Reduce
const singleList = ( data ) => 
    
  Array.from( data.reduce((acc, product) =>{
    if ( acc.has(product.id) ){
      if (acc.get(product.id).name !== product.name){
        acc.get(product.id).name = product.name;
      };
      
    } else {
      
      acc.set(product.id,{...product})
    }

    return acc

  },new Map()).values());

console.log(singleList(items));



// version mas reducida

const refactoryUniqueList = ( items ) =>
Array.from(items.reduce((data, product) => data.set(product.id, {...product}), new Map()).values());

console.log(refactoryUniqueList(items));




// 🔴 3. Nivel Difícil – Unir varias fuentes en un solo catálogo
// 📌 Context

// Tienes inventario recibido desde distintas fuentes:

// tienda física

// tienda online

// proveedores

// Cada fuente puede tener:

// productos nuevos

// productos repetidos con valores actualizados

// Tu tarea es unificar todo en un solo catálogo, sin duplicados.

// 🧠 Entrada
const physical = [
  { id: 1, name: "Laptop", stock: 3 },
  { id: 2, name: "Mouse", stock: 10 }
];

const web = [
  { id: 2, name: "Mouse v2", stock: 12 },
  { id: 3, name: "Keyboard", stock: 4 }
];

const provider = [
  { id: 1, name: "Laptop v3", stock: 5 },
  { id: 1, name: "Laptop v3", stock: 5 }

];

// 🎯 Objetivo

// Fusionar todo en un único arreglo usando Map, conservando el último update de cada producto.

// ✔ Salida esperada
// [
//   { id: 1, name: "Laptop v3", stock: 5 },
//   { id: 2, name: "Mouse v2", stock: 12 },
//   { id: 3, name: "Keyboard", stock: 4 }
// ]


const catalogProducts = (...data) => {
  const result = new Map();
  data.forEach( source => {
    source.forEach( product =>{
      if (!result.has(product.id)){
        result.set(product.id, {...product})
      } else {
        result.set(product.id, {...product})
      }
    })

  })
    
  return Array.from(result.values())

}

console.log(catalogProducts(physical,web,provider));




// 🧠 4. Nivel Senior – Detectar inconsistencias (comparación multi-fuente)
// Un sistema financiero recibe el mismo registro bancario desde 3 sistemas diferentes y necesita detectar cuando los valores:

// deberían ser iguales

// pero vienen distintos

// (Ejemplo real: detectar desajustes contables.)

// 🧠 Entrada
const bankA = [
  { id: 100, balances: 500 },
  { id: 200, balances: 1000 }
];

const bankB = [
  { id: 100, balances: 550 },   // diferente al de A
  { id: 200, balances: 1000 }
];

const bankC = [
  { id: 100, balances: 500 },   // coincide con A
  { id: 300, balances: 200 }    // nuevo
];

// 🎯 Objetivo

// Usar Map para:

// Agrupar transacciones por id

// Detectar si tienen valores inconsistentes

// Generar reporte con:

// {
//   id: 100,
//   balancess: [500, 550, 500],
//   consistent: false
// }

// ✔ Salida esperada
// [
//   {
//     id: 100,
//     balancess: [500, 550, 500],
//     consistent: false
//   },
//   {
//     id: 200,
//     balancess: [1000, 1000],
//     consistent: true
//   },
//   {
//     id: 300,
//     balancess: [200],
//     consistent: true
//   }
// ]


// Este ejercicio es senior porque implica:

// agrupar datos dinámicamente

// procesarlos

// validar consistencia de negocio

// generar informe final

const financialRecord = (...data) => {
  const groupData = new Map();
  data.forEach( source => {
    source.forEach( dataCurrent => {

      if (!groupData.has(dataCurrent.id)){
          
        groupData.set(dataCurrent.id, {

          id: dataCurrent.id,
          balances: [],
          consistent: true,
          firtsValue: dataCurrent.balances

        })
            
      } 
          
     
      const fount = groupData.get(dataCurrent.id)
      fount.balances.push(dataCurrent.balances)
        
      if ( fount.balances !== dataCurrent.firtsValue){

        fount.consistent = false
      }

    })
  })
  return Array.from(groupData.values())
}

console.log(financialRecord(bankA,bankB, bankC));




// Ejercicio 1 — Índice invertido de palabras (Map de Map)
// Context

// Estás construyendo un motor de búsqueda básico.
// Necesitas crear un índice invertido, donde cada palabra apunte a los data donde aparece y cuántas veces aparece.

// 👉 Usar Map es ideal porque permite anidar estructuras y garantizar orden y eficiencia.

// Entrada
const data = [
  { id: 1, text: "javascript es genial y javascript es divertido" },
  { id: 2, text: "python es genial pero javascript también" },
];

// Salida esperada (estructura conceptual)
// Map {
//   "javascript": Map { 1: 2, 2: 1 },
//   "es":         Map { 1: 2, 2: 1 },
//   "genial":     Map { 1: 1, 2: 1 },
//   "divertido":  Map { 1: 1 },
//   "python":     Map { 2: 1 },
//   "pero":       Map { 2: 1 },
//   "también":    Map { 2: 1 }
// }
// posicio = id ---> cuantas veces se repite en esa posicion ({id: repeat, id: repeat})

const source = data.flatMap(doc => {
  const words = doc.text.split(' ')
  return words.map( word => ({
    id: doc.id,
    word,
  }))
})
console.log(source);

new Map().keys


const indexInverter = (data) => {
  return data.reduce((result, { id, word }) => {
    if (!result.has(word)){
      result.set(word, new Map());
    } 
    const internalValue = result.get(word);
    if (!internalValue.has(id) ) internalValue.set( id, (internalValue.get(id) || 0) + 1);
  
    return result

  }, new Map())
}

console.log(indexInverter(source));

//!otra solucion con reduce

const searchEngine = ( data ) => {

  return data.reduce((result, {id, text}) => {
    const words = text.split(' ');
    for (const word of words) {
      if (!result.has(word)) result.set(word, new Map());
      const source = result.get(word);
      !source.has(id) ? source.set(id, 1) : source.set(id, source.get(id) + 1);
    }
    return result
  
  }, new Map())
}


console.log(searchEngine(data));















