
// Ejercicio 1: Sistema de Facturación de Tienda Online
// Contexto: Una tienda online necesita calcular el price final de cada producto después de aplicar discounts e taxs.
// Entrada:
const product = [
  { name: "Laptop", price: 800, discount: 0.15, tax: 0.19 },
  { name: "Mouse", price: 25, discount: 0.10, tax: 0.19 },
  { name: "Teclado", price: 60, discount: 0.20, tax: 0.19 },
  { name: "Monitor", price: 300, discount: 0.05, tax: 0.19 }
];
// Salida esperada:
// [
//   { name: "Laptop", priceFinal: 808.40 },
//   { name: "Mouse", priceFinal: 26.78 },
//   { name: "Teclado", priceFinal: 57.12 },
//   { name: "Monitor", priceFinal: 338.55 }
// ]
// Fórmula: priceFinal = (price - price × discount) × (1 + tax)

const discountProduct = ( products ) => 
  products.map( ({ name, price, discount, tax }) => 
    (
      {
        name,
        princeFinal: ( ( price - ( price * discount )) * ( 1 + tax ) ).toFixed(2) * 1 
      }
    )
  );

console.log(discountProduct(product));


// Ejercicio 2: Procesamiento de Datos de Sensores IoT
// Contexto: Una estación meteorológica recibe datos de temperatura en Fahrenheit desde varios sensores y necesita convertirlos a Celsius, clasificar el clima y agregar una marca de tiempo formateada.
// Entrada:
const sensorReady = [
  { sensorId: "S001", temperatura: 68, timestamp: 1634567890000 },
  { sensorId: "S002", temperatura: 95, timestamp: 1634567891000 },
  { sensorId: "S003", temperatura: 32, timestamp: 1634567892000 },
  { sensorId: "S004", temperatura: 77, timestamp: 1634567893000 }
];
// Salida esperada:
// [
//   { sensorId: "S001", celsius: 20, clima: "templado", hora: "14:31:30" },
//   { sensorId: "S002", celsius: 35, clima: "caluroso", hora: "14:31:31" },
//   { sensorId: "S003", celsius: 0, clima: "frío", hora: "14:31:32" },
//   { sensorId: "S004", celsius: 25, clima: "templado", hora: "14:31:33" }
// ]
// Fórmula Celsius: (F - 32) × 5/9. Clasificación: frío (<15°C), templado (15-30°C), caluroso (>30°C)


const classifyTime = ( sensorReady ) => {
  return sensorReady.map(({ sensorId, temperatura, timestamp }) =>
  {
    const celsius = (temperatura - 32) * (5 / 9);
    return {
      sensorId,
      celsius,
      clima: celsius < 15 ? 'frio' : celsius < 30 ? 'templado' : 'caluroso' , 
      hora: (new Date(timestamp)).toUTCString().split(' ')[4],
    }
  })
}

console.log(classifyTime(sensorReady));
