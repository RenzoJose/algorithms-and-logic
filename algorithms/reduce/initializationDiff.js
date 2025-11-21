
// Dado un array de strings, queremos encontrar la palabra más corta (la de menor longitud). Usá el método reduce() y aprovechá la inicialización con Infinity (de alguna forma indirecta).
const transport = ["bicicleta", "tren", "avión", "auto"]

const wordShort = ( words ) => {

  const word = words.reduce(( acc, curr ) => {
    if ( curr.length < acc.length ){
      acc.word = curr;
      acc.length = curr.length
    }
    return acc

  }, { word: '', length: Infinity });

  return word.word
}

console.log(wordShort ( transport ));

// Tenés un array de objetos donde cada objeto representa un producto con un precio. Usá reduce() para encontrar el precio más bajo entre todos.