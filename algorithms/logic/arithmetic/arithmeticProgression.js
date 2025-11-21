// exercices 1
// Un teatro tiene filas de asientos. La primera fila tiene 20 asientos, la segunda 23, la tercera 26, y así sucesivamente. ¿Cuántos asientos tiene la fila 15?
// analisis
// tomar fila inicial
// Progresión: 20, 23, 26, 29... (diferencia comun = 3)
// buscar por n cantidad filas  = 20 + (15-1) × 3
// --------------------> FilaInicial  - (filas - 1) * subidaPorFila

const progressRows = ( numberRows ) => 20 + (numberRows - 1) * 3

console.log(progressRows(15));



// exercices 2 gusanito 
// Un gusano está en el fondo de un pozo de 10 metros de profundidad.
// Cada día sube 3 metros, pero durante la noche resbala 2 metros.
// ¿Cuántos días necesita para salir del pozo?
// 💡 Datos

// Profundidad del pozo H = 10

// Subida diaria A = 3

// Resbalón nocturno B = 2


const wronCaseExit = ( depth, dayRaise, nightSlide ) => {
  let position    = 0;
  let counterDay  = 0;

  if ( depth <= 0 || dayRaise >= depth) return `no hay dezplamiento con esos valores profundida es ${depth} y dezplamiento es ${dayRaise}`
 
  while ( depth > position ) {

    counterDay++
    position +=  dayRaise 
  
    if ( position >= depth ) return counterDay;
     
    position -= nightSlide
  
  }

} ; 



// con formula (AlturaTotal  - subidaDia / subidaDia - BajdaNoche) + 1

 const wronCaseExit2 = ( depth, dayRaise, nightSlide ) => {
 return Math.ceil(( depth - dayRaise ) / ( dayRaise - nightSlide ) + 1) 

} ; 
console.log( wronCaseExit2(10, 3, 2)  )




// exercices 2 Suma de los primeros n términos
// Contexto: A menudo necesitamos calcular la suma total de varios términos consecutivos de una progresión aritmética. Por ejemplo, en finanzas para calcular pagos acumulados.
// Problema: Dada una progresión aritmética, calcula la suma de los primeros n términos.
// Fórmula: Sn = (n/2) * (2*a1 + (n-1)*d) o Sn = (n/2) * (a1 + an)
// Entrada:
// primerTermino = 5
// diferencia = 3
// cantidadTerminos = 10



// Salida esperada: 185 

// Secuencia: 5, 8, 11, 14, 17, 20, 23, 26, 29, 32




// Suma: 5+8+11+14+17+20+23+26+29+32 = 185
// (quantityFinally/2) * (2*firts + (quantityFinally-1)* difference)
const caculatePay = (firts, difference, quantityFinally ) =>{
  const result = [];
  result.push(firts)
  let counter = 0;
  for (let index = 0; index < (quantityFinally - 1) ; index++) {

    counter = result[index]
   
    if( result.length >= 1){

      counter += difference
      result.push(counter)
    }
    
  }
 return result.reduce(( acc, curr ) => acc + curr )
} 

 const wronCaseExit2 = ( depth, dayRaise, nightSlide ) => {
 return Math.ceil(( depth - dayRaise ) / ( dayRaise - nightSlide ) + 1) 

} ; 
console.log( wronCaseExit2(10, 3, 2)  )

console.log(caculatePay(5, 3, 10));
