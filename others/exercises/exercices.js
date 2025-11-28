// 🧩Ejercicio 1 — Intermedio: Agrupar datos por categoría (sin usar reduce)
// Contexto
// Tienes un conjunto de objetos que representan transacciones. Cada transacción pertenece a una categoría (comida, transporte, ocio…). Necesitas agruparlas sin usar Array.prototype.reduce, solo con bucles, lógica y estructuras básicas.

// Entrada
const transacciones = [
  { categoria: "comida", monto: 12 },
  { categoria: "transporte", monto: 5 },
  { categoria: "comida", monto: 20 },
  { categoria: "ocio", monto: 7 },
  { categoria: "transporte", monto: 8 },
];
// Objetivo
// Construir un objeto donde las claves sean las categorías y los valores sean listas con las transacciones correspondientes.

// Salida esperada
// {
//   comida: [
//     { categoria: "comida", monto: 12 },
//     { categoria: "comida", monto: 20 }
//   ],
//   transporte: [
//     { categoria: "transporte", monto: 5 },
//     { categoria: "transporte", monto: 8 }
//   ],
//   ocio: [
//     { categoria: "ocio", monto: 7 }
//   ]
// }

const transaction = ( transactions ) => {

    const result = {};

    for (const items of transactions) {
  
        if (!result[items.categoria]) {
            result[items.categoria] = []

        } 
            
        result[items.categoria].push(items);

        
    }

    return result;


}



console.log(transaction(transacciones));









// 🧩 Ejercicio 2 — Avanzado: Mini Motor de Plantillas
// Contexto

// Debes construir un mini motor de plantillas (template engine) básico.
// La idea es reemplazar dentro de un string todas las expresiones con formato {{variable}} con valores que vienen en un objeto.

// Entrada
const template = "Hola {{nombre}}, hoy es {{dia}} y el clima está {{clima}}.";
const data = {
  nombre: "Ana",
  dia: "martes",
  clima: "soleado"
};

// Objetivo
// Reemplazar todas las expresiones {{...}} por su valor correspondiente en data.
// No se permite usar librerías ni funciones de template de ES6.

// Salida esperada
// "Hola Ana, hoy es martes y el clima está soleado."

const templateString = ( template, obj ) => {
    
    return template.split(' ')

}
console.log(templateString(template));




// 🧩 Ejercicio 3 — Experto: Programar un Scheduler sin setTimeout ni setInterval
// Contexto

// Debes crear una función scheduler(callback, delay) que ejecute callback después de cierto tiempo.
// No puedes usar:

// setTimeout

// setInterval

// ningún API de temporización del navegador o Node.js

// Solo puedes usar:

// Date.now()

// bucles

// Promise

// microtareas (por ejemplo: queueMicrotask, .then(), etc.)

// Entrada
// scheduler(() => console.log("Hola!"), 2000);

// Objetivo

// Que la función imprima “Hola!” tras ~2 segundos.

// Salida esperada
// Hola!

// Pistas opcionales

// Puedes usar un bucle que se reprograme con microtareas.

// Debes evitar bloquear el hilo principal.

// Si quieres:
// ✅ las soluciones
// ✅ más ejercicios
// ✅ más difíciles o más enfocados (algoritmos, estructuras, DOM, asincronía, etc.)

// ¡Solo dímelo!
