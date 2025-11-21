
//****** Ejercicio 1: Agrupar por múltiples criterios *******//
//* Sistema de Inventario con Análisis Múltiple
// Tienes un array de productos con ventas
// Debes calcular:
//  total de incomes     ---> amount × price
//  producto más vendido, ---> agrupar las ventas por producto y sumar sus amountes 
//  y stock restante promedio---> stockInicial - amount, y luego promediarlo
// El acumulador debe ser un objeto que vaya construyendo estas estadísticas
const ventas = [
  { producto: 'Laptop', amount: 15, price: 800, stockInicial: 50 },
  { producto: 'Mouse', amount: 45, price: 25, stockInicial: 100 },
  { producto: 'Teclado', amount: 30, price: 60, stockInicial: 80 },
  { producto: 'Monitor', amount: 20, price: 300, stockInicial: 40 },
  { producto: 'Laptop', amount: 10, price: 800, stockInicial: 35 }
];
// Salida esperada:

// const stadictic = {
//   incomeTotal: 32350,
//   productoMasVendido: { producto: 'Mouse', amountTotal: 45 },
//   stockPromedioRestante: 56
// }

const salesElectronic = ( products )=> {

  const { totalIncome, bestSellingProduct, averageRemainingStock } = products.reduce(( acc, product ) => {
    //1. incomes Totales
    acc.totalIncome += product.amount * product.price

    // 2. agrupo por producto y sumo su amount 
    if( !acc.grounpProducts[product.producto] ) acc.grounpProducts[product.producto] = 0 ;
    acc.grounpProducts[product.producto] += product.amount

    // 3. comparo en cada iteracion quien es el mas vendido
    if ( acc.grounpProducts[product.producto] > acc.bestSellingProduct.total ) {
      acc.bestSellingProduct.total   = acc.grounpProducts[product.producto]
      acc.bestSellingProduct.product = product.producto
    }
    // 4. total de stock restate
    acc.addStockMessing += product.stockInicial - product.amount ;
    acc.counterStock++ // cuento el numero de stock
    
    // 5. Calculo Promedio de Stock Restante
    acc.averageRemainingStock = acc.addStockMessing / acc.counterStock ;

    return acc

  }, {
    totalIncome: 0,
    bestSellingProduct: { product: '', total: 0 },
    averageRemainingStock: 0,
    grounpProducts: {},
    addStockMessing: 0,
    counterStock: 0, 
  })

  return { totalIncome, bestSellingProduct, averageRemainingStock }
}
console.log( '**** Exercisces 1 ****' );
console.log(salesElectronic(ventas));



//****** Ejercicio 2: Agrupar por múltiples criterios *******//
// Agrupar productos por categoría Y rango de price (barato: <50, medio: 50-100, caro: >100)
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
    
    if ( !acc[category] ) {
       acc[category] =  { 
        cheap:[],
        medium:[],
        expensive:[],
      }

    }
    const rangePrice =  price < 50 ? 'cheap' : price <= 100 ? 'medium' : 'expensive';
      
    acc[category][rangePrice].push( product );
    return acc;
  },{});
}

console.log("**** Exercice 2****");
console.log(getCategoryPriceRange(products));

//****** Ejercicio 3: Merge y agregar datos de múltiples fuentes *******//
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

console.log("Exercices 3:");
console.log(aggregateSales(sales));


//****** Ejercicio 4: Agrupar por múltiples criterios *******//
// Sistema de Inventario con Múltiples Operaciones
// Tienes un sistema de inventario de una tienda electrónica. Cada producto tiene un ID, name, price, amount en stock y categoría. Necesitas generar un reporte consolidado que calcule:

// Total de valor del inventario (price × amount) por categoría
// amount total de productos por categoría
// price promedio por categoría

// Entrada
const inventory = [
  { id: 1, name: 'Laptop', price: 1200, amount: 5, category: 'Electrónica' },
  { id: 2, name: 'Mouse', price: 25, amount: 50, category: 'Electrónica' },
  { id: 3, name: 'Silla', price: 150, amount: 20, category: 'Muebles' },
  { id: 4, name: 'Escritorio', price: 300, amount: 10, category: 'Muebles' },
  { id: 5, name: 'Teclado', price: 80, amount: 30, category: 'Electrónica' },
  { id: 6, name: 'Lámpara', price: 45, amount: 15, category: 'Muebles' }
];
// Salida Esperada
// {
//   'Electrónica': {
//     valorTotal: 9650,
//     amountProductos: 85,
//     priceAverage: 435
//   },
//   'Muebles': {
//     valorTotal: 6675,
//     amountProductos: 45,
//     pricePromedio: 165
//   }
// }

const reportInventory = ( inventory ) => {

  const report = inventory.reduce(( acc, product ) => {

    const { category } = product;
    if ( !acc[category] ){
      acc[category] = { 
        totalValue    : 0,
        productAmount : 0, 
        totalPrices   : 0,
        counter       : 0,
        nameProduct   : []
      }
    }
    acc[category].totalValue += product.price * product.amount;
    acc[category].productAmount += product.amount;
    acc[category].totalPrices += product.price;
    acc[category].nameProduct.push( product.name);
    acc[category].counter++
    return acc
  }, {} );

  for (const category in report ){
    const { totalPrices, counter } = report[category];
    report[category].averagePrice = totalPrices / counter ;
    delete report[category].totalPrices ;
    delete report[category].counter ;
  }

  return report

}  



console.log('Exercices 4');
console.log( reportInventory(inventory) );

//****** Ejercicio 5: Agrupar por múltiples criterios *******//
//  Pipeline de Transformación de Datos Anidados
// Tienes un array de transacciones bancarias agrupadas por user. Cada user tiene múltiples transacciones con type (income/expenses), amount y date. Debes usar reduce() para aplanar la estructura y crear un objeto único que contenga:

// El balance final de cada user
// La transacción de mayor amount (income o expenses) de cada user
// El total de transacciones por type

const transactions = [
  {
    user: 'Ana',
    motions: [
      { type: 'income', amount: 5000, date: '2024-01-15' },
      { type: 'expenses', amount: 1200, date: '2024-01-20' },
      { type: 'income', amount: 3000, date: '2024-02-01' }
    ]
  },
  {
    user: 'Carlos',
    motions: [
      { type: 'expenses', amount: 800, date: '2024-01-10' },
      { type: 'income', amount: 4500, date: '2024-01-25' },
      { type: 'expenses', amount: 2000, date: '2024-02-05' }
    ]
  },
  {
    user: 'Maria',
    motions: [
      { type: 'income', amount: 6000, date: '2024-01-05' },
      { type: 'expenses', amount: 3500, date: '2024-01-18' }
    ]
  }
];
// Salida Esperada
// {
//   Ana: {
//     balance: 6800,
//     transaccionMaxima: { type: 'income', amount: 5000, date: '2024-01-15' },
//     totalincomes: 2,
//     totalexpensess: 1
//   },
//   Carlos: {
//     balance: 1700,
//     transaccionMaxima: { type: 'income', amount: 4500, date: '2024-01-25' },
//     totalincomes: 1,
//     totalexpensess: 2
//   },
//   Maria: {
//     balance: 2500,
//     transaccionMaxima: { type: 'income', amount: 6000, date: '2024-01-05' },
//     totalincomes: 1,
//     totalexpensess: 1
//   }
// }


const transactionsReduction = ( transactions ) => {

  return transactions.reduce(( acc, { user, motions } ) => {

    acc[user] = motions.reduce(( acc, motion ) => {
      acc.balance += ( motion.type === 'income' ? motion.amount : -motion.amount ); // si es de type income suma, si no resta
      motion.type === 'income' ? acc.totalIncome++ : acc.totalExpenses++;
      if ( !acc.maxTransaction || motion.amount > acc.maxTransaction.amount ) acc.maxTransaction = motion;
      return acc;
    }, {

      balance : 0,
      maxTransaction: null,
      totalIncome: 0,
      totalExpenses: 0,

    });

    return acc
  }, {})

}
console.log('Exercices 5');
console.log(transactionsReduction( transactions ));

//****** Exercices 5: Composición de Funciones con Reduce *******//
// Necesitas implementar un sistema de procesamiento de texto que aplique múltiples transformaciones en secuencia. Tienes un array de funciones de transformación y debes usar reduce() para componerlas y aplicarlas a un texto de entrada. Las transformaciones deben ejecutarse de izquierda a derecha (a diferencia de la composición matemática tradicional).
// Entrada
 const operations = [
  (texto) => texto.trim(),
  (texto) => texto.toLowerCase(),
  (texto) => texto.replace(/[.,!?;:]/g, ''),
  (texto) => texto.split(' '),
  (palabras) => palabras.filter(p => p.length > 0),
  (palabras) => palabras.filter(p => p.length >= 4),
  (palabras) => [...new Set(palabras)],
  (palabras) => palabras.sort()
];

const textIncome = "  ¡Hola, Mundo! Este es un ejemplo de TEXTO. Hola nuevamente, mundo maravilloso.  ";
// Salida Esperada
// ['ejemplo', 'este', 'hola', 'maravilloso', 'mundo', 'nuevamente', 'texto']

const transformations = ( text, operations ) => {

  return operations.reduce(( accText, fuctions ) => {

    return fuctions(accText)


  }, text )

}
console.log( transformations(textIncome, operations) );

