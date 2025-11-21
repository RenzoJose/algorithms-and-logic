//** Ejercicio 1: Estadísticas de texto avanzadas ***//
// Analizar un array de oraciones y obtener estadísticas completas
// Entrada:
const sentences = [
  "JavaScript es genial",
  "Me encanta programar en JavaScript",
  "es lo mas  poderoso y bonito",
  "JavaScript JavaScript JavaScript",
  "Te AMO JavaScript"

];
// Salida esperada:
// {
//   totalWords: 15,
//   uniqueWords: 9,
//   wordFrequency: { javascript: 5, es: 2, genial: 1, me: 1, encanta: 1, ... },
//   longestWord: "javascript",
//   averageWordLength: 6.15, ---> totalpalabras / cantidad
//   sentenceCount: 4--- > oranciones 
// }


const reportMetrics = ( array ) => {

  const totalwords = array.map( element => element.split(' ').length).reduce( (acc, curr) => acc + curr )

  let uniqueWords = [];
  for ( const item of array ){
    
    let splitItems = item.split(' ');
    uniqueWords = [...uniqueWords, ...splitItems]
    console.log(splitItems);
  }


  const wordFrequency =  uniqueWords.reduce(( acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc
  }, {})

  const longestWord = uniqueWords.map( item => item.length ).sort( (a, b) => b - a )[0]

  const averageWordLength = uniqueWords.map( item => item.length )
  .reduce( (acc, curr, index, array) => {
    
   return index === array.length - 1 ? ((acc + curr ) / array.length).toFixed(2) * 1 : acc + curr
   
  }) 
  console.log(averageWordLength);
  

  const sentenceCount = array.length
  

  let resultUniqueWords = [...new Set(uniqueWords)].length


  return {
    totalwords,
    resultUniqueWords,
    wordFrequency,
    longestWord,
    averageWordLength,
    sentenceCount,
  }
  

}

console.log(reportMetrics(sentences));



