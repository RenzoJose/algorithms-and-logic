
// exercices 1
// dado un numero entero, determinar a que trimestre del año pertenece 

const months = {
    '1° trimestre': [1, 3],
    '2° trimestre': [4, 6],    
    '3° trimestre': [7, 9],
    '4° trimestre': [10, 12],
}

const queaterOfYear = ( number ) => Object.entries( months ).find(([ _, [min, max]]) => number >= min && number <= max)?.[0] ?? `no hay datos `
console.log(queaterOfYear(8));
