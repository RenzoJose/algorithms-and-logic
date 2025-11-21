
const categorias = {
  nombre: "Tecnología",
  subcategorias: [
    {
      nombre: "Computadoras",
      subcategorias: [
        { nombre: "Laptops", subcategorias: [] },
        { nombre: "Desktops", subcategorias: [] }
      ]
    },
    { nombre: "Celulares", subcategorias: [] }
  ]
};


const recorrerCategorias = (cat, result = []) => {

  result.push(cat.nombre)

  for (const sub of cat.subcategorias) {
    recorrerCategorias(sub, result);  // llamada recursiva

  }
  
  return result
    result.push(cat.nombre)

    for (const sub of cat.subcategorias) {
       recorrerCategorias(sub, result);  // llamada recursiva

    }
    
    return result
  
}

console.log(recorrerCategorias(categorias));




// con objetos 

const persona = {
  nombre: "Juan",
  direccion: {
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: {
      nombre: "EEUU",
      codigo: 20
      codigo: "US"
    }
  }
};

const recorrerObjeto = (obj, resultados = []) => {

  for ( const key in obj ) {

    const valor = obj[key];
    
    if (typeof valor === "object" ) {

      recorrerObjeto(valor, resultados); // recursión para sub-objetos

  for (const key in obj) {
    const valor = obj[key];
    
    if (typeof valor === "object" ) {
      recorrerObjeto(valor, resultados); // recursión para sub-objetos
    } else {
      resultados.push(valor); // condición base: valor primitivo
    }
  }

  return resultados.join(' ');
}


console.log(recorrerObjeto(persona));







// Funciones Recursivas en JavaScript
// Una función recursiva es aquella que se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños. Cada llamada recursiva trabaja con una versión reducida del problema original hasta llegar a un caso base que detiene la recursión.
  // factorial 
  // El factorial de un número es el producto de todos los números entre 1 y el número mismo. 
//  5! = 5* 4* 3* 2 *1 = 120


function factorial(number) {

  if (number === 0 || number === 1) return 1;
         
  return number * factorial(number - 1);


}

console.log(factorial(5)); 



// 3 Ejercicios para Practicar
// Ejercicio 1: Invertir una Cadena
// Contexto del problema:
// Necesitas invertir una cadena de texto usando recursión. Por ejemplo, "hola" debe convertirse en "aloh".
// Entrada:

// Una cadena de texto (string)

// Salida esperada:

// La cadena invertida

// Ejemplos:
   // "aloh"
// invertirCadena("recursion") // "noisrucer"
// invertirCadena("a")         // "a"
// invertirCadena("")          // ""
// Pista: Toma el último carácter y concatena con la inversión del resto de la caden


const invertString = (str) => {
  
  if ( str === '') return ''  
  return str[str.length - 1 ] + invertString( str.slice( 0, -1 ))

}
console.log(invertString("hola") );

