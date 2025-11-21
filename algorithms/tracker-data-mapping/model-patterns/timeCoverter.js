
// 🔹 Ejercicio 2: Convertidor de Tiempo
// Crear una función que convierta segundos a formato "HH:MM:SS"
// Ejemplo: 3661 → "01:01:01"
// todo
// entrada---> number en segundos 
// salida ---> formato stirng --> "HH:MM:SS"
// cuantos segundos tiene 24 horas ---> 86400 segundos --> condicionar maximo 
// condicionar si es un numero entero y mayor o igual a 0

// descomponer
// 1hora ---> 3600 segundos
// 1 min --> 60 segundos 
// 1 segundo --> lo que queda resto de descomponer horas y minutos


function segundosAHora( segundos ) {

  if ( segundos >= 86400) return 'supera la capacidad de segundos en un dia'
  if ( segundos <= 0 || !Number.isInteger(segundos)) return 'introduzca un numero valido'

  let horas   = String(Math.floor(segundos / 3600)).padStart(2,'0')
  let minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2,'0')
  let segundo = String((segundos % 3600) % 60).padStart(2,'0')

  // analogia si para 0 a la izquierda
  // if (horas < 10 ) horas = '0' + horas;
  // if (minutos < 10 ) minutos = '0' + minutos;
  // if (segundo < 10 ) segundo  = '0' + segundo;
  
 return horas + ':' + minutos + ':'+ segundo

}
