
// Un teatro tiene filas de asientos. La primera fila tiene 20 asientos, la segunda 23, la tercera 26, y así sucesivamente. ¿Cuántos asientos tiene la fila 15?
// analisis
// tomar fila inicial
// Progresión: 20, 23, 26, 29... (diferencia comun = 3)
// buscar por n cantidad filas  = 20 + (15-1) × 3
// --------------------> FilaInicial  - (filas - 1) * subidaPorFila

const progressRows = ( numberRows ) => 20 + (numberRows - 1) * 3

console.log(progressRows(15));


// dado un numero entero, determinar a que trimestre del año pertenece 

const months = {
    1: [1, 3],
    2: [4, 6],    
    3: [7, 9],
    4: [10, 12],
}

const queaterOfYear = ( number ) => Object.entries(months).find(([ _, [min, max]]) =>
    number >= min && number <= max)?.[0] ?? `Enter a valid Number between 1 and 12`

console.log(queaterOfYear(13));

