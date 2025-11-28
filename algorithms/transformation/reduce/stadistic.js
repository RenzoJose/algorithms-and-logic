
//****** Ejercicio 1: Estadísticas de texto avanzadas *******//
// Analizar un array de oraciones y obtener estadísticas completas
// Entrada:
const sentences = [
  "JavaScript es genial",
  "Me encanta programar en JavaScript",
  "Reduce es muy poderoso",
  "JavaScript JavaScript JavaScript"
];
// Salida esperada:
// {
//   totalWords: 15,
//   uniqueWords: 9,
//   wordFrequency: { javascript: 5, es: 2, genial: 1, me: 1, encanta: 1, ... },
//   longestWord: "javascript",
//   averageWordLength: 6.15,
//   sentenceCount: 4

// note: para contar palabras ignorando mayúsculas, tildes y caracteres especiales
// puedes usar regex y métodos de string como toLowerCase() y normalize()
// Ejemplo para extraer palabras de una oración:
// const sentence = "¡Hola, mundo!";
// const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];  
 // const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];

const analyzeText = ( arrySentences ) => {
  let totalWordLength = 0;
  return arrySentences.reduce( ( acc, sentence ) => {
     

    //1. creo un array de los elementos y elimino tildes y caracteres especiales
    const words = sentence.toLowerCase().split(' ')
    .filter( word => word.trim() !== '' ).map( word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ); 
    
    // 2. actualizo las propiedades del acumulador, sumando la longitud cada vez que itera (para saber cuantas palabras hay en total)
    acc.totalWords += words.length;

    // 3. recorro el array de palabras para actualizar la frecuencia de cada palabra, la palabra mas larga y el promedio del largo de palabras
    words.forEach( word => {
      acc.wordFrequency[word] = acc.wordFrequency[word] ? acc.wordFrequency[word] + 1 : 1; // frecuencia de cada palabra

    if (word.length > acc.longestWord.length) acc.longestWord = word; // palabra mas larga
    acc.averageWordLength = ((totalWordLength += word.length) / acc.totalWords).toFixed(2) * 1; // promedio del largo de palabras
    
    });

    acc.uniqueWords = new Set([...Object.keys(acc.wordFrequency)]).size ; // cantidad de palabras unicas
    acc.sentenceCount += 1; // cantidad de oraciones
    return acc;
  }, {
      totalWords: 0,
      uniqueWords: 0,
      wordFrequency: {},
      longestWord: "",
      averageWordLength: 0,
      sentenceCount: 0
  })             

};
console.log("Exercise 2:");
console.log(analyzeText(sentences));






//****** Ejercicio 5: Pipeline de transformaciones complejas *******//
// Procesar transacciones:
//  filtrar válidas ---> status: "completed",
//  agrupar por usuario, --> user1, user2
//  calcular balance y detectar anomalías
// Entrada:
const transaction = [
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
//     balance: 3800, --> se calcula restando deposts - withrawals
//     deposits: 4000,
//     withdrawals: 200,
//     transactionCount: 3,
//     hasLargeTransaction: true --->  depósito/retiro > 2500
//   },
//   user2: {
//     balance: 100,
//     deposits: 5000,
//     withdrawals: 4900,
//     transactionCount: 2,
//     hasLargeTransaction: true
//   }
// }

const processtransaction = ( transaction ) => {
  
  // 1. filtrar transacciones completadas
  return transaction.filter( transaction => transaction.status === "completed" )
  .reduce( ( acc, transaction ) => {
    const { amount, user, type } = transaction
    // 2. inicializar usuario en el acumulador si no existe
    if (!acc[user] ){
      acc[user] = { balance: 0, deposits: 0, withdrawals: 0, transactionCount: 0, hasLargeTransaction: false }
    }
    
    // 3. agrupar por usuario y calcular estadísticas
    acc[ transaction.user ].transactionCount += 1; //contador de transacciones completed

    // depositos realizados 
    if ( type === "deposit" ) {
      acc[user].deposits += amount;
      acc[user].balance += amount;
      
      // retiros realizados
    } else if ( type === "withdrawal" ) {
      acc[ transaction.user ].withdrawals += transaction.amount;
      acc[ transaction.user ].balance -= transaction.amount;
    }   
      //  validacion de transaccion mas larga mayor 2500
    if ( transaction.amount > 2500 ) {
      acc[user].hasLargeTransaction = true;
    }else{

       acc[user].hasLargeTransaction = false;
    }
    return acc;

 
  }, {})       
};

console.log("Exercices 5:");
console.log(processtransaction(transaction));


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

const normalizeData = ( usersWithPosts ) => {
  return usersWithPosts.reduce( ( acc, user ) => {

    // 1. normalizar usuarios
    acc.users[ user.userId ] = { userId: user.userId, username: user.username, postIds: user.posts.map( post => post.postId ) };

    // 2. normalizar posts
    user.posts.forEach( post => {
      acc.posts[post.postId] = { postId: post.postId, title: post.title, likes: post.likes, authorId: user.userId };
      acc.stats.totalLikes += post.likes; // total de likes

      // 3. detectar el post con mas likes
      if (!acc.stats.mostLikedPost || post.likes > acc.posts[acc.stats.mostLikedPost].likes) {
        acc.stats.mostLikedPost = post.postId;
      }
    } );

    // 4. actualizar estadísticas
    acc.stats.totalUsers = Object.keys( acc.users ).length; // total de usuarios
    acc.stats.totalPosts = Object.keys( acc.posts ).length; // total de posts 
    return acc;

  }, {
    users: {},
    posts: {},
    stats: { totalUsers: 0, totalPosts: 0, totalLikes: 0, mostLikedPost: 0 }
  } )
};

console.log("**** Exercices 6 ****");
console.log( normalizeData( usersWithPosts ));


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

const createMonthlyReport = ( salesData ) => {

  return salesData.reduce( ( acc, sale, i, arraySales ) => {
    const month = sale.date.slice(0, 7); // extraer año-mes
    if ( !acc[ month ] ) acc[ month ] = {};
    if ( !acc[ month ][ sale.region ] ){
      acc[ month ][ sale.region ] = {
        revenue: 0, products: {},
        totalQuantity: 0,
        avgPrice: 0,
      };
    }

    if ( !acc[ month ][ sale.region ].products[ sale.product ] ){
      acc[ month ][ sale.region ].products[ sale.product ] = 0
    }

    acc[ month ][ sale.region ].products[ sale.product ] += sale.quantity
    acc[ month ][ sale.region ].totalQuantity += sale.quantity
    acc[ month ][ sale.region ].revenue += sale.quantity * sale.price
    acc[ month ][ sale.region ].avgPrice = (acc[ month ][ sale.region ].revenue / acc[ month ][ sale.region ].totalQuantity).toFixed(2) * 1 
 
  
    if ( i === arraySales.length - 1 ) {
      for ( const months in acc ){
        for ( const region in acc[months]){
          const { totalQuantity, ...result } = acc[months][region]
          acc[months][region] = result
        } 
      }
    }
    return acc
  }, {} );
 
};

console.log("DESAFÍO FINAL:");
console.log( createMonthlyReport(salesData));