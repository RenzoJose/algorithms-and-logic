
// 🔹 Exercices 2: valor que no se repite
//  dada una cadena de string encuentra el primer caracter que no se repite 
const str = 'aaaaaaveeeecceeesss'

const firstCharacter = ( str ) => {
  const result = str.split('').find(( character, __ , array ) => 
    array.indexOf(character) === array.lastIndexOf(character) 
  )
    
  return result || null
}
console.log(firstCharacter(str));



