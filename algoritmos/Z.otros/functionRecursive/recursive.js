const categorias = {
  nombre: "Tecnología",
  subcategorias: [
    {
      nombre: "Computadoras",
      subcategorias: [
        { nombre: "Laptops", subcategorias: [] },
        { nombre: "Desktops", subcategorias: [] }
      ]
    },
    { nombre: "Celulares", subcategorias: [] }
  ]
};


const recorrerCategorias = (cat, result = []) => {

    result.push(cat.nombre)

    for (const sub of cat.subcategorias) {
       recorrerCategorias(sub, result);  // llamada recursiva

    }
    
    return result
  
}

console.log(recorrerCategorias(categorias));




// con objetos 

const persona = {
  nombre: "Juan",
  direccion: {
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: {
      nombre: "EEUU",
      codigo: "US"
    }
  }
};

const recorrerObjeto = (obj, resultados = []) => {
  for (const key in obj) {
    const valor = obj[key];
    
    if (typeof valor === "object" ) {
      recorrerObjeto(valor, resultados); // recursión para sub-objetos
    } else {
      resultados.push(valor); // condición base: valor primitivo
    }
  }

  return resultados.join(' ');
}

console.log(recorrerObjeto(persona));



