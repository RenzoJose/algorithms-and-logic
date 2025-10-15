//****** Ejercicio 1: Agrupar por múltiples criterios *******//
// Agrupar productos por categoría Y rango de precio (barato: <50, medio: 50-100, caro: >100)
// Entrada:
const products = [
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Mouse", category: "electronics", price: 25 },
  { name: "Shirt", category: "clothing", price: 45 },
  { name: "Jacket", category: "clothing", price: 150 },
  { name: "Keyboard", category: "electronics", price: 75 }
];

// Salida esperada:
// {
//   electronics: {
//     barato: [{ name: "Mouse", category: "electronics", price: 25 }],
//     medio: [{ name: "Keyboard", category: "electronics", price: 75 }],
//     caro: [{ name: "Laptop", category: "electronics", price: 1200 }]
//   },
//   clothing: {
//     barato: [{ name: "Shirt", category: "clothing", price: 45 }],
//     medio: [],
//     caro: [{ name: "Jacket", category: "clothing", price: 150 }]
//   }
// }

const getCategoryPriceRange = ( products ) => {
  return products.reduce ( ( acc, product ) => {
    const { category, price } = product;
    const princeRange =  price < 50 ? 'cheap' : price <= 100 ? 'medium' : 'expensive';
    acc[ category ][ princeRange ].push( product);
    return acc;
  }, { electronics: { cheap: [], medium: [], expensive: [] }, clothing: { cheap: [], medium: [], expensive: [] } } )
}
console.log("Exercice 1:");
console.log(getCategoryPriceRange(products));



//****** Ejercicio 2: Estadísticas de texto avanzadas *******//
// Analizar un array de oraciones y obtener estadísticas completas
// Entrada:
const sentences = [
  "JavaScript es genial",
  "Me encanta programar en JavaScript",
  "Reduce es muy poderoso",
  "JavaScript     JavaScript JavaScript"
];
// Salida esperada:
// {
//   totalWords: 15,
//   uniqueWords: 9,
//   wordFrequency: { javascript: 5, es: 2, genial: 1, me: 1, encanta: 1, ... },
//   longestWord: "javascript",
//   averageWordLength: 6.15,
//   sentenceCount: 4




const analyzeText = ( arrySentences ) => {
  let totalWordLength = 0;
  return arrySentences.reduce( ( acc, sentence ) => {
      // const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];

    //1. creo un array de los elementos y elimino tildes y caracteres especiales
    const words = sentence.toLowerCase().split(' ')
    .filter( word => word.trim() !== '' ).map( word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ); 
    
    // 2. actualizo las propiedades del acumulador, sumando la longitud cada vez que itera (para saber cuantas palabras hay en total)
    acc.totalWords += words.length;

    // 3. recorro el array de palabras para actualizar la frecuencia de cada palabra, la palabra mas larga y el promedio del largo de palabras
    words.forEach( word => {
      acc.wordFrequency[word] = acc.wordFrequency[word] ? acc.wordFrequency[word] + 1 : 1; // frecuencia de cada palabra

      acc.uniqueWords = new Set([...Object.keys(acc.wordFrequency)]).size ; // cantidad de palabras unicas
      
      if (word.length > acc.longestWord.length) acc.longestWord = word; // palabra mas larga
      acc.averageWordLength = ((totalWordLength += word.length) / acc.totalWords).toFixed(2) * 1; // promedio del largo de palabras
    }); 
      acc.sentenceCount += 1; // cantidad de oraciones
    return acc;
  }, {
      totalWords: 0,
      uniqueWords: 0,
      wordFrequency: {},
      longestWord: "",
      averageWordLength: 0,
      sentenceCount: 0
  } )             

};
console.log("Exercise 2:");
console.log(analyzeText(sentences));


//****** Ejercicio 3: Transformar array plano en árbol jerárquico *******//
// Convertir un array plano con relaciones parent-child en estructura de árbol
// Entrada:
const flatData = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child 1", parentId: null},
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
  const root = [] ;
  flatData.forEach( data  => {
    ( data.parentId )
    ? idToNodeMap[data.parentId].children.push( idToNodeMap[data.id] )
    : root.push(idToNodeMap[data.id]);
     
           
  })
  return root;
};

console.log("Exercices 3:");
console.log(( buildTree( flatData ) ));



//****** Ejercicio 4: Merge y agregar datos de múltiples fuentes *******//
// Combinar ventas por vendedor y producto, calculando totales
// Entrada:
const sales = [
  { seller: "Ana", product: "Laptop", amount: 1200, quantity: 1 },
  { seller: "Ana", product: "Mouse", amount: 25, quantity: 2 },
  { seller: "Carlos", product: "Laptop", amount: 1200, quantity: 1 },
  { seller: "Ana", product: "Laptop", amount: 1200, quantity: 1 },
  { seller: "Carlos", product: "Keyboard", amount: 75, quantity: 3 }
];

// Salida esperada:
// {
//   Ana: {
//     totalSales: 2450,
//     products: {
//       Laptop: { quantity: 2, total: 2400 },
//       Mouse: { quantity: 2, total: 50 }
//     }
//   },
//   Carlos: {
//     totalSales: 1425,
//     products: {
//       Laptop: { quantity: 1, total: 1200 },
//       Keyboard: { quantity: 3, total: 225 }
//     }
//   }
// }

const aggregateSales = (sales) => {
  return sales.reduce( ( acc, sale ) => {
    const { seller, product, amount, quantity } = sale;

    // 1. Si el vendedor no existe en el acumulador, inicializarlo
    if (!acc[seller]){ 
      acc[seller] = { totalSales: 0, products: {} }
    };

    // 2. Actualizar las ventas totales del vendedor 
    acc[seller].totalSales += amount * quantity;

    // 3. Si el producto no existe para el vendedor, inicializarlo
    if (!acc[seller].products[product]){ 
      acc[seller].products[product] = { quantity: 0, total: 0 }
    };
    
    acc[seller].products[product].quantity += quantity;
    acc[seller].products[product].total += amount * quantity;
    return acc;
  }, {});
};

console.log("Exercices 4:");
console.log(aggregateSales(sales));


//****** Ejercicio 5: Pipeline de transformaciones complejas *******//
// Procesar transacciones: filtrar válidas, agrupar por usuario, calcular balance y detectar anomalías
// Entrada:
const transactions = [
  { id: 1, user: "user1", type: "deposit", amount: 1000, status: "completed" },
  { id: 2, user: "user1", type: "withdrawal", amount: 200, status: "completed" },
  { id: 3, user: "user2", type: "deposit", amount: 5000, status: "completed" },
  { id: 4, user: "user1", type: "withdrawal", amount: 50, status: "failed" },
  { id: 5, user: "user2", type: "withdrawal", amount: 4900, status: "completed" },
  { id: 6, user: "user1", type: "deposit", amount: 3000, status: "completed" }
];

// Salida esperada:
// {
//   user1: {
//     balance: 3800,
//     deposits: 4000,
//     withdrawals: 200,
//     transactionCount: 3,
//     hasLargeTransaction: true // depósito/retiro > 2500
//   },
//   user2: {
//     balance: 100,
//     deposits: 5000,
//     withdrawals: 4900,
//     transactionCount: 2,
//     hasLargeTransaction: true
//   }
// }

const processTransactions = (transactions) => {
  return transactions
  .filter( tx => tx.status === "completed" ) // 1. filtrar transacciones completadas
  .reduce( ( acc, tx ) => {
    // 2. inicializar usuario en el acumulador si no existe
    if (!acc[ tx.user ] ){
      acc[ tx.user ] = { balance: 0, deposits: 0, withdrawals: 0, transactionCount: 0, hasLargeTransaction: false }
    }
    
    // 3. agrupar por usuario y calcular estadísticas
    acc[ tx.user ].transactionCount += 1;

    if ( tx.type === "deposit" ) {
      acc[ tx.user ].deposits += tx.amount;
      acc[ tx.user ].balance += tx.amount;
 
    } else if ( tx.type === "withdrawal" ) {
      acc[ tx.user ].withdrawals += tx.amount;
      acc[ tx.user ].balance -= tx.amount;
    }   
    if ( tx.amount > 2500 ) {
      acc[ tx.user ].hasLargeTransaction = true;
    }
    return acc;

  }, {})       
};

console.log("Exercices 5:");
console.log(processTransactions(transactions));


//****** Ejercicio 6: Normalizar y indexar datos relacionales *******//
// Convertir array de usuarios con posts anidados a estructura normalizada
// Entrada:
const usersWithPosts = [
  {
    userId: 1,
    username: "ana",
    posts: [
      { postId: 101, title: "Post 1", likes: 10 },
      { postId: 102, title: "Post 2", likes: 5 }
    ]
  },
  {
    userId: 2,
    username: "carlos",
    posts: [
      { postId: 103, title: "Post 3", likes: 20 }
    ]
  }
];

// Salida esperada:
// {
//   users: {
//     1: { userId: 1, username: "ana", postIds: [101, 102] },
//     2: { userId: 2, username: "carlos", postIds: [103] }
//   },
//   posts: {
//     101: { postId: 101, title: "Post 1", likes: 10, authorId: 1 },
//     102: { postId: 102, title: "Post 2", likes: 5, authorId: 1 },
//     103: { postId: 103, title: "Post 3", likes: 20, authorId: 2 }
//   },
//   stats: {
//     totalUsers: 2,
//     totalPosts: 3,
//     totalLikes: 35,
//     mostLikedPost: 103
//   }
// }

const normalizeData = (usersWithPosts) => {
  // Tu código aquí
};

console.log("\nEjercicio 6:");
console.log(normalizeData(usersWithPosts));


//****** DESAFÍO FINAL: Reduce dentro de Reduce *******//
// Crear un reporte de ventas mensual con múltiples niveles de agregación
// Entrada:
const salesData = [
  { date: "2024-01-15", region: "North", product: "A", quantity: 10, price: 100 },
  { date: "2024-01-20", region: "North", product: "B", quantity: 5, price: 200 },
  { date: "2024-02-10", region: "North", product: "A", quantity: 8, price: 100 },
  { date: "2024-01-25", region: "South", product: "A", quantity: 15, price: 100 },
  { date: "2024-02-15", region: "South", product: "B", quantity: 12, price: 200 }
];

// Salida esperada:
// {
//   "2024-01": {
//     North: { revenue: 2000, products: { A: 10, B: 5 }, avgPrice: 133.33 },
//     South: { revenue: 1500, products: { A: 15 }, avgPrice: 100 }
//   },
//   "2024-02": {
//     North: { revenue: 800, products: { A: 8 }, avgPrice: 100 },
//     South: { revenue: 2400, products: { B: 12 }, avgPrice: 200 }
//   }
// }

const createMonthlyReport = (salesData) => {
  // Tu código aquí - Usa reduce dentro de reduce
};

console.log("\nDESAFÍO FINAL:");
console.log(createMonthlyReport(salesData));