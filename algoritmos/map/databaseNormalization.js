
// Ejercicio 3: Normalización de Base de Datos de Usuarios
// Contexto: Un sistema legacy tiene datos de usuarios en formato inconsistente. Necesitas normalizarlos: extraer nombre y apellido de un string, formatear el email a minúsculas, calcular la edad desde la fecha de nacimiento, y generar un username único.
// Entrada:
const usuariosLegacy = [
  { nombreCompleto: "Juan Pérez García", email: "Juan.Perez@EMAIL.com", fechaNacimiento: "1990-05-15" },
  { nombreCompleto: "María López", email: "MARIA.L@gmail.COM", fechaNacimiento: "1985-12-03" },
  { nombreCompleto: "Carlos Rodríguez Muñoz", email: "Carlos123@YAHOO.com", fechaNacimiento: "1998-07-22" }
];
// Salida esperada:
[
  { 
    nombre: "Juan", 
    apellido: "Pérez García", 
    email: "juan.perez@email.com", 
    edad: 35,
    username: "jperez35"
  },
  { 
    nombre: "María", 
    apellido: "López", 
    email: "maria.l@gmail.com", 
    edad: 39,
    username: "mlopez39"
  },
  { 
    nombre: "Carlos", 
    apellido: "Rodríguez Muñoz", 
    email: "carlos123@yahoo.com", 
    edad: 27,
    username: "crodriguez27"
  }
]
// Username: primera letra del nombre + apellido (sin espacios ni tildes) + edad. Asume fecha actual: 2025-10-22