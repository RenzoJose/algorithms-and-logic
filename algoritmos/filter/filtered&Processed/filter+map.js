


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

