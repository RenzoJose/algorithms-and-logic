//*Ejercicio 1 — Agrupación avanzada con reduce
//Tienes este array:

const orders = [
  { id: 1, user: "Oliver", total: 120, status: "completed" },
  { id: 2, user: "Jannerys", total: 80, status: "pending" },
  { id: 3, user: "Oliver", total: 50, status: "completed" },
  { id: 4, user: "Samuel", total: 200, status: "completed" },
  { id: 5, user: "Jannerys", total: 150, status: "cancelled" },
];
// Objetivo: Construir un objeto con esta estructura:
// {
//   Oliver: { totalCompleted: 170, ordersCount: 2 },
//   Jannerys: { totalCompleted: 0, ordersCount: 0 },
//   Samuel: { totalCompleted: 200, ordersCount: 1 }
// }

//TODO:
//1. crear un nuevo objeto
//2. agrupando por usuario
//3. cada usuario se crea un nuevo objeto con:  cantidad de ordenes completadas y sumar total de ordenes completadas
//4. condicionar si verificar si cumplen el estatus completadas y sumarlas

const completedOrders = (receivedOrders) => {
  return receivedOrders.reduce((acc, orden) => {
    if (!acc[orden.user]) {
      acc[orden.user] = { totalCompleted: 0, ordersCount: 0 };
    }

    if (orden.status === "completed") {
      acc[orden.user].totalCompleted += orden.total;
      acc[orden.user].ordersCount += 1;
    }
    return acc;
  }, {});
};

console.log(completedOrders(orders));
















//*Ejercicio 2 — Validación profesional (every + some)
//Tienes una lista de usuarios:
const users = [
  { name: "Renzo", age: 25, active: true },
  { name: "Ana", age: 17, active: true },
  { name: "Luis", age: 30, active: false },
];
// Objetivos:
// Verificar si todos los usuarios son mayores de edad.
// Verificar si al menos uno está inactivo.
// Obtener el primer usuario inactivo.

const firtUserInactive = ( users ) => {
  const isAdult = users.every((items) => items.age >= 18); 
  const isActive = users.some((element) => element.active === true);
  const inactive = users.find(({ age, active} ) => age >= 18 && !active );
  
  return {
    allAdult: isAdult,
    isActive,
    inactive,
  }
}

console.log(firtUserInactive( users));



//*Ejercicio 3 — Normalización de datos (map + flatMap + Set)
// Tienes esta estructura:

const posts = [
  { id: 1, tags: ["js", "react", "web"] },
  { id: 2, tags: ["js", "node"] },
  { id: 3, tags: ["react", "css"] },
];
// Objetivos: TODO:
// Obtener un array plano con todos los tags.
// Obtener solo los tags únicos.
// Ordenarlos alfabéticamente.
// Resultado esperado:
["css", "js", "node", "react", "web"];

const uniquePost = (posts) => {
  const tags = posts.flatMap(({ tags }) => tags);
  return [...new Set(tags)].toSorted();
};

console.log(uniquePost(posts));



//* 🔵 Ejercicio 4 — Ordenamiento complejo (sort)
// Tienes este array:
const products = [
  { name: "Laptop", price: 1000, rating: 4.5 },
  { name: "Mouse", price: 50, rating: 4.8 },
  { name: "Keyboard", price: 100, rating: 4.5 },
  { name: "Monitor", price: 300, rating: 4.7 },
  { name: "Laptop", price: 1200, rating: 4.5 },
];
// Objetivo: TODO:
// Ordenar los productos:
// Primero por rating descendente
// Si el rating es igual → por price ascendente
// Esto ya es criterio múltiple, típico de entrevista técnica.

const productOrdering = (products) => {
  return products.toSorted((a, b) => {
    if (b.rating === a.rating) {
      return b.price - a.price;
    }
    return b.rating - a.rating;
  });
};

console.log(productOrdering(products));

//*🔵 Ejercicio 5 — Transformación avanzada (Object.entries + reduce)

// Tienes este objeto:
const scores = {
  Renzo: [10, 15, 20],
  Ana: [18, 19, 17],
  Luis: [8, 12, 14],
};
//Transformarlo en este array:

[
  { name: "Renzo", average: 15 },
  { name: "Ana", average: 18 },
  { name: "Luis", average: 11.33 },
];

const datatransformation = (scores) => {
  return Object.entries(scores).map(([name, grades]) => {
    const addGrades = grades.reduce((acc, curr) => acc + curr, 0);
    const average = Number((addGrades / grades.length).toFixed(2));
    // const average = (Math.round((addGrades/grades.length) * 100)) / 100
    return {
      name,
      average,
    };
  });
};
console.log(datatransformation(scores));




//* 6. Exercices 🔥 Mini ejercicio BONUS (nivel senior)

const allUsers = [
  { name: "Renzo", skills: ["js", "react"] },
  { name: "Ana", skills: ["python", "js"] },
  { name: "Luis", skills: ["js", "node", "docker"] }
];
// TODO:
// 1️⃣ El primer usuario que sabe docker
// 2️⃣ Verificar si todos saben javascript
// 3️⃣ Verificar si al menos uno sabe react


const userProgramacion = ( allUsers ) => {

  const userKnowsDocker = allUsers.find(({_, skills}) =>  skills.some((skill) => skill === 'docker' ));

  const allKnowsJs = allUsers.every(({_, skills}) => skills.includes('js'));

  const oneKnowsReact = allUsers.some(({_, skills}) => skills.includes('react'));
  return {
    userKnowsDocker,
    allKnowsJs,
    oneKnowsReact,
  }

}

console.log(userProgramacion(allUsers));


// * Ejercicio 7 — Validación de pedidos (nivel entrevista real)
// Tienes pedidos:

const newOrders = [
  { id: 1, total: 120, paid: true },
  { id: 2, total: 80, paid: true },
  { id: 3, total: 300, paid: false },
  { id: 4, total: 50, paid: true }
];

// TODO:
// 1️⃣ Verificar si todos los pedidos están pagados
// 2️⃣ Verificar si existe algún pedido mayor a 250
// 3️⃣ Obtener el primer pedido no pagado

const ordenVerification = (newOrders) => {

  const allIsPaid = newOrders.every(({ paid }) => paid );
  const hasOrdersOver250 = newOrders.some(({ total }) => total > 250)
  
  return {
    allIsPaid,
    hasOrdersOver250,

  }

}

console.log(ordenVerification(newOrders));



// *8 ejercico 
const newUsers = [
  { name: "Renzo", active: true, skills: ["js", "react"] },
  { name: "Ana", active: false, skills: ["python", "django"] },
  { name: "Luis", active: true, skills: ["js", "node"] },
  { name: "Maria", active: true, skills: ["react", "css"] }
];

// Objetivo: 
// 1. Obtener todas las skills únicas de usuarios activos
// 2.  ordenadas alfabéticamente.
// Resultado esperado:["css", "js", "node", "react"]

const resultSkills = (newUsers) => [...new Set( newUsers.flatMap( ({ active, skills }) => active ? skills : []) ) ].toSorted();
console.log(resultSkills(newUsers));


//* 🧠 Ejercicio 9 — Producto más vendido
const ordersProducts = [
  {
    id: 1,
    items: [
      { product: "Laptop", quantity: 1 },
      { product: "Mouse", quantity: 2 }
    ]
  },
  {
    id: 2,
    items: [
      { product: "Laptop", quantity: 1 },
      { product: "Keyboard", quantity: 1 }
    ]
  },
  {
    id: 3,
    items: [
      { product: "Mouse", quantity: 3 }
    ]
  }
];

// Objetivo
// Encontrar qué producto se vendió más (por cantidad).
// Resultado esperado:"Mouse"

const bestSellingProduct = ( newOrders ) => {
  const groupByProducts = newOrders.reduce(( products, {items} ) => {
    items.forEach(element => {
        !products[element.product]
        ? products[element.product] = element.quantity
        : products[element.product] += element.quantity
      }
    ); 
    return products
  }, {});

  return Object.entries(groupByProducts).reduce(( acc, product) =>{
    if (acc[1] < product[1]){
      acc = product
    }
    return acc
  })[0]
 
}

console.log(bestSellingProduct(ordersProducts));

// ! otra solucion todo dentro de un mismo reduce

const theBestSellingProduct = (newOrders) => {
  const { maxProduct } =  newOrders.flatMap(({ items }) => items).reduce((data, { product, quantity} ) => {
    data.countProduct[product] = data.countProduct[product] ? data.countProduct[product] + quantity : quantity
    if ( data.countProduct[product] > data.maxQuality){
      data.maxQuality = data.countProduct[product];
      data.maxProduct = product;
    }
    return data
  }, {
    countProduct: {},
    maxProduct: '',
    maxQuality: 0,
  })

  return maxProduct

}


console.log(theBestSellingProduct(ordersProducts));

//! otra solucion usando  el operador de coalicencia nulla

const oneBestSellingProduct = (( products ) => {
  const { counter, maxProduct } = products.flatMap(( product ) => product.items ).reduce(( acc, { product, quantity }) => {
    acc.counter[product] = ( acc.counter[product] ?? 0 ) + quantity;

    if ( acc.counter[product] > acc.maxQuality ){
      acc.maxQuality = acc.counter[product]
      acc.maxProduct = product
    }
    return acc

  }, {
    counter: {},
    maxProduct: '',
    maxQuality: 0,
  })

  return maxProduct
})

console.log(oneBestSellingProduct(ordersProducts));


// *🧠 Ejercicio 10 — Clientes que gastaron más de 500

const purchases = [
  { user: "Renzo", total: 200 },
  { user: "Ana", total: 150 },
  { user: "Renzo", total: 400 },
  { user: "Luis", total: 100 },
  { user: "Ana", total: 400 }
];
// Objetivo
// 1️⃣ Calcular cuánto gastó cada usuario
// 2️⃣ Obtener los que gastaron más de 500
// 3️⃣ Ordenarlos por gasto descendente

// Resultado esperado:
// [
//   { user: "Renzo", total: 600 },
//   { user: "Ana", total: 550 }
// ]


// const extractData = ( data ) => {
//   return data.reduce((acc, items) => {
//     acc[items.user] ? acc[items.user].total += items.total : acc[items.user] = items
//     return acc
//   }, {})

// }
const extractData = ( data ) => {
  const extractExpenses = data.reduce((acc, items) => {
    acc[items.user] ? acc[items.user].total += items.total : acc[items.user] = {...items}
    return acc
  }, {})

  const userOver500 = Object.values(extractExpenses).filter( ( user ) => user.total > 500 )
  
  const orderedDescending = Object.values(extractExpenses).toSorted((a, b) => a.total - b.total )

  return{
    extractExpenses,
    userOver500,
    orderedDescending,
  }
}
console.log(extractData(purchases));



// !otrasolucion
const extractExpenses = ( data ) => {

  const source = data.reduce((acc, { user, total }) => {
    const current = acc.get(user) ?? acc.set(user, { user, total: 0 }).get(user);
    // const current = acc.get(user) ?? { user, total: 0}
    current.total += total
    // acc.set(user, current)
    return acc
  }, new Map())

  return [...source.values()]

}


console.log(extractExpenses(purchases));




//*🧠 Ejercicio 11 — Verificación de permisos
const roles = [
  {
    role: "admin",
    permissions: ["read", "write", "delete"]
  },
  {
    role: "editor",
    permissions: ["read", "write"]
  },
  {
    role: "viewer",
    permissions: ["read"]
  }
];

// Objetivos

// 1️⃣ Verificar si todos los roles pueden leer
// 2️⃣ Verificar si existe algún rol que pueda eliminar
// 3️⃣ Verificar si todos pueden escribir



const checkRoles = (roles) => {
  const canAllRead = roles.every(({permissions}) => permissions.some((items) => items === 'read'));
  const canDelete = roles.flatMap(({permissions})=> permissions).some((items) => items === 'delete');
  const canWrite = roles.every(({permissions}) => permissions.some(items => items === 'write'));

  return{
    canAllRead,
    canDelete,
    canWrite,
  }
}

console.log(checkRoles(roles));





// * 🧠 Ejercicio 11 — Usuario con más habilidades
const developers = [
  { name: "Renzo", skills: ["js", "react", "node"] },
  { name: "Ana", skills: ["python", ] },
  { name: "Luis", skills: ["js", "docker", "kubernetes", "aws"] }
];
// Objetivo: Encontrar el desarrollador con más skills.

const developerMoreSkills = (developers) => {
  const source  = developers.reduce((acc, { name, skills}) => {
  
    if (skills.length > acc.get('skill')){
      acc.set('name', name )
      acc.set('skill', skills.length )
    }
    return acc

  }, new Map([
    ['name', ''],
    ['skill', 0],
  ]))

  return source.get('name')
}

console.log(developerMoreSkills(developers));


const moreSkills = (developers) => {
  const source  = developers.reduce((acc, { name, skills}) => {
    acc.set('name', '').set('skill', 0)
    if (skills.length > acc.get('skill')){
      acc
      .set('skill', skills.length)
      .set('name', name)
    } 
    return acc

  }, new Map())

  return source.get('name')
}

console.log(moreSkills(developers));





// *12 🔥 BONUS — ULTRA rompe cabeza (nivel senior real)

const teamsDev = [
  {
    name: "Frontend",
    devs: [
      { name: "Renzo", skills: ["js", "react"] },
      { name: "Ana", skills: ["js", "vue"] }
    ]
  },
  {
    name: "Backend",
    devs: [
      { name: "Luis", skills: ["node", "docker"] },
      { name: "Maria", skills: ["node", "aws", "TypeScript"] },
 
    ]
  }
];

// Objetivos
// 1️⃣ Obtener todas las skills únicas de todos los equipos
// 2️⃣ Verificar si existe algún desarrollador que sepa react
// 3️⃣ Obtener el desarrollador con más skills

const maxDevkills = ((dev) =>{
  const counterSkills = dev.map(({skills}) => skills.length)
  const max = Math.max(...counterSkills);
  const min = Math.min(...counterSkills);

  if (max === min){
    return `todos tienen las mismas cantidad de habilidades`
  }else{
    const bigDev = dev.find(({skills}) => skills.length === max);
    return `El campeon en habilidades es ${bigDev.name}`
  }

})


const getSkillsSummary = ( teams, maxDev ) => {
  const developersSkills = teams.flatMap(({devs})=> devs)
  const skillsUnique = [...new Set(developersSkills.flatMap(({skills}) => skills))]
  const knowReact = skillsUnique.some( skill => skill === 'react')
 

  const resultBigDev = maxDev(developersSkills)

  return{
    skillsUnique,
    knowReact,
    resultBigDev,
  }
}
console.log(getSkillsSummary(teamsDev, maxDevkills));
// console.log(teamsDev);
