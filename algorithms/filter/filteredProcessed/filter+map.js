

console.log(saludar('Josue' ));


//🔹 Ejercicio 2: Sistema de Gestión de Empleados
// Trabajas en el departamento de RRHH y necesitas procesar información de empleados. Tienes un array de objetos con datos de empleados y debes realizar diferentes operaciones.
// Entrada:
const empleados = [
  { nombre: "Ana García", salario: 3500, departamento: "IT", antiguedad: 5 },
  { nombre: "Carlos Ruiz", salario: 2800, departamento: "Ventas", antiguedad: 3 },
  { nombre: "María López", salario: 4200, departamento: "IT", antiguedad: 7 },
  { nombre: "Pedro Sánchez", salario: 3000, departamento: "Marketing", antiguedad: 2 },
  { nombre: "Laura Martín", salario: 3800, departamento: "IT", antiguedad: 4 }
];
// Filtrar empleados del departamento 'IT' ---FILTER
// Aumentar el salario un 10% a todos los empleados filtrados--- MAP
// Crear un nuevo array solo con nombres y nuevos salarios

// Salida esperada:
// [
//   { nombre: "Ana García", nuevoSalario: 3850 },
//   { nombre: "María López", nuevoSalario: 4620 },
//   { nombre: "Laura Martín", nuevoSalario: 4180 }
// ]

const informationEmployees = ( employees ) => {
    return employees.filter( employee => employee.departamento === 'IT').map( employee => (
        {
            nombre: employee.nombre,
            nuevoSalario: employee.salario + ( employee.salario * 0.1 ),
        }
    ))

}
console.log(informationEmployees(empleados));


 function saludar (nombre) {
  return saludoCompleto(nombre)
};



function saludoCompleto ( nombre ) {

    return `hola como estas ${nombre} TE AMO MUCHO`
}



// 1. Ejercicio Fácil — Detectar si una lista forma una progresión aritmética
// Enunciado

// Dada una lista de números, determina si todos sus términos forman una progresión aritmética (es decir, si la diferencia entre cada par de términos consecutivos es constante).

// Debes plantear al menos dos formas posibles de resolverlo, por ejemplo:

// Con every

// Con reduce

// Con bucles tradicionales o con map

// Ejemplos de entrada y salida
// Entrada: [2, 4, 6, 8, 10]
// Salida esperada: true

// diferecia = posicion1 - posicon 0  2
    
// si la suma posicion 0 + diferencia === poscion siguiente  true
// si la suma posicion 2 + diferencia === poscion siguiente  true


// Entrada: [3, 6, 10]
// Salida esperada: false


// paso 1 iterar el arreglo 
//  determinar la condicion de progresion 
//  con la primera diferencia del primer valor con el segundo 
//  despues iterar sobre los demas valores si cumple con esa diferencia 2 elemento 3 al cuatro 


const arithmeticProgression = ( arr ) => {
    let diferencia = arr[1] - arr[0];
    let flag = 0
    
    return arr.every( (number) => {

        flag += diferencia
          
        if ( number === flag ){

            flag = number
            return true
        }
     
    })
}


console.log(arithmeticProgression([2, 4, 6, 8, 10]));


// Problema: Dado el primer término, la diferencia común y la posición n, calcula el valor del término en esa posición.
 [3, 7,11, 15, 19 ]



// Fórmula: an = a1 + (n-1) * d
// Entrada:
// javascriptprimerTermino = 3
// diferencia = 4
// posicion = 5
// Salida esperada:
// javascript19 // (3 + (5-1) * 4 = 3 + 16 = 19)


const searchValue = (firtsNumber, difference, position ) => {

    if (!firtsNumber && !difference && !position ) return `no hay datos entrada` ;
    return firtsNumber + (position - 1) * difference ;

} 

console.log(searchValue());


// El objetivo es escribir una función en JavaScript que determine si una cadena de entrada que contiene solo paréntesis, corchetes y llaves ((), [], {}) está balanceada (es decir, es válida).


// 🎯 La Función a Implementar: esValido(s)La función debe aceptar una cadena s y devolver true si la cadena de entrada es válida, y false en caso contrario.

// Reglas de Validación Paréntesis Abiertos Deben Ser Cerrados: Cada paréntesis, corchete o llave de apertura ((, [, {) debe ser cerrado por el mismo tipo de símbolo de cierre ( ), ], }).


// Cierres en el Orden Correcto: Los cierres deben ocurrir en el orden correcto. Un corchete no puede cerrar un paréntesis abierto antes.Todos los Símbolos Deben Estar Cerrados: Todos los símbolos de apertura deben tener un símbolo de cierre correspondiente.


// 
// Ejemplos para RenzoEntrada (s)Resultado EsperadoExplicación"()"true Un par válido.
// entrada          salida
// "()[]{}"     true Múltiples pares válidos.
// "(]"         false Cierre incorrecto (abrió (, cerró ]).
// "{ [ ( ) ] }"     trueParéntesis anidados válidos.
// "([{"        falseAbierto, pero nunca cerrado.
// "{[()]"falseFalta el corchete de cierre.


// 🛠️ Pista Estratégica para la SoluciónDile que piense en una estructura de datos que solo permite agregar y quitar elementos de un extremo (LIFO - Last In, First Out). pila
//  Esta estructura es ideal para recordar el último paréntesis abierto y asegurarse de que sea el primero en ser cerrado.¡Este algoritmo pondrá a prueba su lógica en el manejo de estructuras de datos y es muy divertido de optimizar!

const patters = ( str ) => {

    const value = str.trim().split('').every( character => ['(',')','{','}','[',']'].includes(character))
   
    if ( !value || !str ) return `Enter a symbol valid [],(),{}`
    
    const simbols = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    
    const pila = [];
    
    for (let i = 0; i < str.length; i++) {

        if ( !simbols[ str[i] ] ){

            pila.push(str[i]);

            console.log(pila);
            

        }else{

            const last =  pila.pop()

            console.log(simbols[ str[i] ]);
         
            if (last !== simbols[ str[i] ]) return false;    

        }
    }
    return pila.length === 0
}

console.log(patters('({)(})'));





