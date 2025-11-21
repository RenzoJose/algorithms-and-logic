
// Dado un array de números enteros, tu tarea es encontrar
// la longitud del subarray contiguo que tiene la suma más grande.
// Por ejemplo, en el array [-2, 1, -3, 4, -1, 2, 1, -5, 4], 
// el subarray [4, -1, 2, 1] tiene la suma más grande,
// que es 6. Debes retornar la longitud de ese subarray,
// que en este caso es 4.


// algoritmo kannden 
// 1. maxiterado = indice[0]
// 2. maxglobal =  indice[0]
// 3. maxIterado = iterado > ( maxIterandor + iterado )
// 4. si es true, maxIterado = iterado y toma el INDICE como inicio de corte array, ARR.SLICE.( INICIO, FINAL )
// 5. si es false, maxIterado = maxIterandor + iterado
// 5. compararamos--> maxIterado > maximoGlobal
// 6. true, maxGlobal = maxIterado y tomamos el INDICE como final de corte array 
//  y repitomos el ciclo

const subArrayContiguo = ( arr ) => {

  let maxGlobal     = arr[0]; 
  let highCurrValue = arr[0]; 
  let end   = 0; 
  let first = 0; 

  for ( let i = 1; i < arr.length; i++ ){
  
    if ( arr[i] > highCurrValue + arr[i] ){

      highCurrValue = arr[i]

      first = i;
      
    }else{

      highCurrValue =  highCurrValue + arr[i]
  
    }
      
    if ( highCurrValue > maxGlobal ){
      end = i  
      maxGlobal = highCurrValue
    }

  }

  const subarray = arr.slice( first, end + 1 ); 
  const lengthSubArray = subarray.length

  return {
    maxGlobal,
    subarray,
    lengthSubArray
  }


}

console.log( subArrayContiguo([-2, 1, -3, 4, -1, 2, 1, -5, 4]) );