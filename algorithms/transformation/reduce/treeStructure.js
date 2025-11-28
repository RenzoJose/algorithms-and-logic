
//****** Ejercicio 3: Transformar array plano en árbol jerárquico *******//
// Convertir un array plano con relaciones parent-child en estructura de árbol
// Entrada:
const flatData = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child 1", parentId: 1},
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Grandchild 1", parentId: 2 },
  { id: 5, name: "Grandchild 2", parentId: 2 },
  { id: 6, name: "Child 3", parentId: 1 }
];

// Salida esperada:
// {
//   id: 1,
//   name: "Root",
//   children: [
//     {
//       id: 2,
//       name: "Child 1",
//       children: [
//         { id: 4, name: "Grandchild 1", children: [] },
//         { id: 5, name: "Grandchild 2", children: [] }
//       ]
//     },
//     { id: 3, name: "Child 2", children: [] },
//     { id: 6, name: "Child 3", children: [] }
//   ]
// }

const buildTree = ( flatData ) => {

  //1. creo un mapa de id a nodo para acceso rápido
  const idToNodeMap = flatData.reduce( ( acc, data ) => {
    const { parentId, ...restData } = data;
    acc[data.id] = { ...restData , children: [] }
    return acc;
  }, {} );
  
  // 2. construyo el árbol asignando hijos a sus padres
  let root ;

  flatData.forEach( data  => {

    if (data.parentId === null ){
     
      if ( root !== undefined) throw new Error(" multiple Root");
      root = idToNodeMap[ data.id ]
    }else{
      idToNodeMap[ data.parentId ].children.push( idToNodeMap[ data.id ] )
    }
  })
  return root;
}; 
console.log(buildTree( flatData ));


