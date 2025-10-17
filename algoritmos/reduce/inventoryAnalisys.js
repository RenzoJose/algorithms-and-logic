
//* Sistema de Inventario con Análisis Múltiple
// Tienes un array de productos con ventas
// Debes calcular:
//  total de ingresos     ---> cantidad × precio
//  producto más vendido, ---> agrupar las ventas por producto y sumar sus cantidades 
//  y stock restante promedio---> stockInicial - cantidad, y luego promediarlo
// El acumulador debe ser un objeto que vaya construyendo estas estadísticas
const ventas = [
  { producto: 'Laptop', cantidad: 15, precio: 800, stockInicial: 50 },
  { producto: 'Mouse', cantidad: 45, precio: 25, stockInicial: 100 },
  { producto: 'Teclado', cantidad: 30, precio: 60, stockInicial: 80 },
  { producto: 'Monitor', cantidad: 20, precio: 300, stockInicial: 40 },
  { producto: 'Laptop', cantidad: 10, precio: 800, stockInicial: 35 }
];
// Salida esperada:

// const stadictic = {
//   ingresoTotal: 32350,
//   productoMasVendido: { producto: 'Mouse', cantidadTotal: 45 },
//   stockPromedioRestante: 56
// }

const salesElectronic = ( products )=> {

  const { totalIncome, bestSellingProduct, averageRemainingStock } = products.reduce(( acc, product ) => {
    //1. Ingresos Totales
    acc.totalIncome += product.cantidad * product.precio

    // 2. agrupo por producto y sumo su cantidad 
    if( !acc.grounpProducts[product.producto] ) acc.grounpProducts[product.producto] = 0 ;
    acc.grounpProducts[product.producto] += product.cantidad

    // 3. comparo en cada iteracion quien es el mas vendido
    if ( acc.grounpProducts[product.producto] > acc.bestSellingProduct.total ) {
      acc.bestSellingProduct.total   = acc.grounpProducts[product.producto]
      acc.bestSellingProduct.product = product.producto
    }
    // 4. total de stock restate
    acc.addStockMessing += product.stockInicial - product.cantidad ;
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
  }, 
  {
    electronics: { cheap: [], medium: [], expensive: [] },
    clothing   : { cheap: [], medium: [], expensive: [] }
  } );
}

console.log("****bExercice 2b****");
console.log(getCategoryPriceRange(products));

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