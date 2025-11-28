


// Dado un array de números y un objetivo (target), encuentra dos índices cuyos valores sumen exactamente ese objetivo.
// Debe retornar los índices, no los valores.

nums = [2, 7, 11, 15]
target = 17
salida :
[0, 1]
// Porque nums[0] + nums[1] = 2 + 7 = 9
   
const targetSearch = (numbers, target) => {
  const indexTarget = [];
  for (let i = 0; i < numbers.length; i++) {
      
    for (let c = 1; c < numbers.length; c++) {
      const getAdd = numbers[i] + numbers[c]
      if ( getAdd === target){
        
        indexTarget.push(i, c)
        
      }
      
    }
    
  }

  return indexTarget;

}

console.log(targetSearch(nums, target));

   

















// Problema en el front

// Si el usuario hace scroll infinito o cambia filtros, puedes duplicar elementos.

// Necesitas evitar re-render masivo y duplicados.
// estado anterior :
const page1 = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];

const page2 = [
  { id: 2, name: "Mouse v2" },   // repetido pero actualizado
  { id: 3, name: "Keyboard" }
];

const page3 = [
  { id: 3, name: "Keyboard" },   // repetido exacto
  { id: 4, name: "Monitor" }
];
// salidas:
// [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Mouse v2" },
//   { id: 3, name: "Keyboard" },
//   { id: 4, name: "Monitor" }
// ]
// analisis 

// verificar estado anterior y estado actual
// verifico si id existe, si existe verifico si name es diferente 
// si es diferente actualiza el name 
// si no 
// anterior pasaria ser el actual 

const avoidDuplicatesRender = (page1, page2, page3) => {

  const incoming = [...page1,...page2, ...page3];

  return Object.values( incoming.reduce((acc, curr) => {
      
    if(!acc[curr.id]){ // entra unicos 
      acc[curr.id] = curr
                
    } else { // entra si encuentra el mismo id

      if(curr.name !== acc[curr.id].name){

        acc[curr.id].name = curr.name
      }
    }

    return acc

  },{}))

   

}





console.log(avoidDuplicatesRender(page1, page2, page3));


// solucion con do While 
const DuplicatesRenderSolution = (...pages) => {
  let previous = [];
  let index = 0;

  do {
    const current = pages[index]
    current.forEach( dataCurrent  => {
      
      const fount = previous.find( dataPrevious => dataPrevious.id === dataCurrent.id);

      if ( fount ){

        if (fount.name !== dataCurrent.name) {
          fount.name = dataCurrent.name
        }
      } else {
        previous.push({...dataCurrent})
      }

    });

    index++

  } while ( index < pages.length)

  
  return previous
 
   
}

console.log(DuplicatesRenderSolution(page1, page2, page3));


// otra solucion 

const DuplicatesRenderSolution2 = (...pages) => {

  const previous = [];

  pages.forEach( page => {

    page.forEach( dataCurrent => {

      const fount = previous.find( dataPrevious => dataPrevious.id === dataCurrent.id)

      if ( fount ){
        if ( fount.name !== dataCurrent.name){

          fount.name = dataCurrent.name
        }

      } else {

        previous.push({...dataCurrent})
      }

    })

  })

  return previous

}

console.log(DuplicatesRenderSolution2(page1, page2, page3));


// solucion optima con Map 

const mergePagesFast = (...pages) => {
  const pagesMapping = new Map();
  pages.forEach( page => {

  page.forEach( dataCurrent => {

    if ( pagesMapping.has(dataCurrent.id) ){ // pregunto si existe el id en el objeto Map

      const savedData = pagesMapping.get(dataCurrent.id); // obtengo los datos por id del Map 

      if ( savedData.name !== dataCurrent.name ) savedData.name = dataCurrent.name; // verifico si hay diferencia? 

    } else { // si no existe lo agrego 

      pagesMapping.set(dataCurrent.id,{...dataCurrent}) // lo agrego por id y rompiendo la referencia con el objeto original 

    }

  })



  })
  return pagesMapping



}

console.log(mergePagesFast(page1,page2, page3));




const mergePagesFast2= (pageOne, pageTwo, pageThree) => {

  const data = [...pageOne, ...pageTwo, ...pageThree]
  return data.reduce((result, source) => 
    result.set(
      source.id, result.get(source.id) || {...source}
    )
  , new Map())


}
console.log(mergePagesFast2(page1,page2, page3));

