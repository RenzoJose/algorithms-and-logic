const { resolve } = require("node:dns")

console.log(typeof "Hola")
console.log(typeof 42)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol("id"))
console.log(typeof 15n)
console.log(typeof []);

const a = 2;   // Number
const b = 2n;  // BigInt

console.log(typeof a); // "number"
console.log(typeof b); // "bigint"

 const h = 10
console.log(h);

 const j = "JS"
console.log(j);

const c = { nombre: "Renzo" }

console.log(c);

 const d = [1, 2, 3] 

console.log(d);

 const e = function() {}

console.log(e);


console.log("5" + 2)
console.log("5" - 2)
console.log(true + 1);
console.log(false + 1)

console.log(0 == false) //--> true 
console.log(0 === false)//--> false
console.log(null == undefined)//--> true
console.log(null === undefined)//--> false
console.log([] == false)//--> true 

console.log(null == 0) //== -->null solo igual a undefined
console.log(null >= 0) //Relacional (>=) → convierte null a número: 0

console.log([1,2] == "1,2")

console.log(true + true) // 1+1
console.log(true + false)
console.log(false + false)


console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))


console.log([] + [])// ''
console.log([] + {})//
console.log({} + [])// --> 0

// Array.prototype(Object.prototype)


const promise = new Promise((resolve, reject) => {

    resolve(15)
})

console.log(promise.then(resolve => {
    resolve
}));


