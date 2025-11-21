
// 🔹Exercices 1:
// crear una funcion que dado un numero entero y devuelva su equivalente en romano 
// limitante hasta el 3999
// todo:
// 1. usar una estructura de datos que guarde string numero romano a su equivalente en numero entero hasta 3999
// 2. una vez tenida la data, buscar la forma de condicionar dado un numero hasta 3999 limitante 
// 3. aparatir de ese numero de entrada, buscar en la data su equivalente en string de romanoa y concatenar 

// data:
const dataRomans = {
  M   :1000,
  CM  :900,
  D   :500, 
  CD  :400,
  C   :100,
  XC  :90,
  L   :50,
  XL  :40,
  X   :10,
  IX  :9,
  V   :5,
  IV  :4,
  I   :1,
}
const romans = ( number ) =>{

  if ( !Number.isInteger(number) ) return `${ number } --> is not an integer`;
  if ( number <= 0 || number > 3999 ) return `Enter a Number between 0 and 3999`

  let numberRomans = '';

  for ( let [ romans, value ] of Object.entries(dataRomans) ){
    while ( number >= value ) {
    numberRomans += romans
    number -= value        
    }
  }
  return numberRomans ;
}

console.log(romans(12));


console.log(romans(12));
