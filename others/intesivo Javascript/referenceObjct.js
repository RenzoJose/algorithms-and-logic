//!Regla senior muy importante:
// *Si guardas objetos del array → copia el objeto
// ? shallow copy (copia superficial).

const data = { user: "Renzo", total: 10, meta: { country: "Canada" } };
const copy = data
const copyData = {...data} //---> copia de un solo nivel 

const copyDeepData = {
    ...data,
    meta: {...data.meta}
}

// data.meta   ─┐
//              ├──> { country: "canada" }
// copy.meta   ─┘

console.log(copy === data);
console.log(data === copyData);
console.log(data.meta === copyData.meta);
console.log(data.meta === copyDeepData.meta);

// opcion 1 - Cómo hacer una copia profunda (deep copy):  const copy = structuredClone(data);
// Ventajas:
// copia profunda real
// soporta arrays, objetos, maps, sets, etc.

//Opción 2 — JSON.parse(JSON.stringify()): const copy = JSON.parse(JSON.stringify(data))
// Problemas:
// pierde Date
// pierde undefined
// pierde Map, Set
// pierde funciones
// Hoy en dia se usa mucho menos.

// Opción 3 — copiar manualmente: Esto funciona si sabes exactamente la estructura.
// const copy = {
//   ...items,
//   meta: { ...items.meta }
// }

//! Regla que usan los seniors:
//* Spread → suficiente para objetos planos
//* Deep copy → solo si hay objetos anidados que mutarás
// ? Copiar profundamente sin necesidad es mala práctica. --ojo

//!que pasa cuando es un arreglo de objetos
const arr = [{ x: 1 }]
const copyArr = [...arr]
copyArr[0] === arr[0] // true 
console.log(copyArr[0] === arr[0]);

// demostracion que apuntan al mismo luegar en memoria 
console.log(copyArr[0].x = 5);
console.log(arr[0].x);



// explicacion: [...arr] --> solo copia los elementos del array, pero no clona los objetos dentro.
// Entonces lo que copia es la referencia al objeto.
// arr    ──> [ ref1 ]
// copyArr ─> [ ref1 ]
//               │
//               ▼
//            { x:1 }

// Cómo evitar eso:
const newCopyArr = arr.map(obj => ({ ...obj }));
console.log(arr[0] === newCopyArr[0]);
// son dos copias diferentes que apuntan a diferentes espacios en memoria
console.log(arr[0]);
console.log(newCopyArr[0]);

// regla importante 
// | Operación      | Qué copia                   |
// | -------------- | --------------------------- |
// | `{...obj}`     | propiedades de primer nivel |
// | `[...arr]`     | elementos del array         |
// | objetos dentro | **referencias**             |

// nota: === en objetos compara referencias, no contenido.


const obj = { x: 1 }

const arrOne = [obj]

const copyOne = [...arrOne]

copyOne[0].x = 5

console.log(obj.x)