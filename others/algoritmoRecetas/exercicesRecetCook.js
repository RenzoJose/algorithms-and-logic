const readline = require("readline");

const recipes = {
  pizza: ["Salsa Tomate", "Masa Pizza", "Queso Mozzarella", "Tocineta"],
  pasta: ["Pasta", "Salsa de Tomate", "Queso Mozzarella"],
  lasana: ["Pasta Lasaña", "Salsa Bechamel", "Salsa Tomate"],
  hotdog: ["pan", "salchica", "salsa tomate", "mayonesa"],
};

const awaitDelay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const cookingRecipe = async (namePlate) => {
  try {
    console.log(`Iniciando preparación: ${namePlate}`);
    await awaitDelay(1000);

    console.log(`Proceso de preparación de ingredientes (${namePlate}):`);

    for (let index = 0; index < recipes[namePlate].length; index++) {
      await awaitDelay(700);
      const ingredient = recipes[namePlate][index];
      const isLast = index === recipes[namePlate].length - 1;

      if (!isLast) {
        console.log(`Cocinar - ${ingredient}`);
      } else {
        console.log(`Agregando ingrediente Final ${ingredient}`);
      }
      await awaitDelay(800);
    }
  } catch (error) {
    console.log(`hubo un error de tiempo:`, error);
  }

  return `El plato está listo: ${namePlate} 🍽️`;
};

const askRecipe = (rl, recipeNumber) => {
  return new Promise((resolve) => {
    rl.question(
      `Receta #${recipeNumber} - Elige (pizza, pasta, lasana, hotdog): `,
      (answer) => {
        resolve(answer.trim().toLowerCase());
      },
    );
  });
};

const cookingThreeRecipes = async () => {
  const rl = readline.createInterface({
    input: process.stdin, //---lee escribes
    output: process.stdout, // --- salida proceso
  });

  console.log("=== Bienvenido al Sistema de Recetas ===");
  console.log("Recetas disponibles: pizza, pasta, lasana, hotdog\n");

  const selectedRecipes = [];

  for (let i = 1; i <= 3; i++) {
    let recipe;
    let valid = false;

    while (!valid) {
      recipe = await askRecipe(rl, i);

      if (recipes[recipe]) {
        selectedRecipes.push(recipe);
        valid = true;
        awaitDelay(2000);
        if (valid) console.log(`✅ orden Recibida, siguiente eleccion: `);
      } else {
        console.log(`❌ "${recipe}" no está en la lista. Intenta de nuevo.\n`);
      }
    }
  }

  rl.close();
  console.log("\n🔥 Iniciando preparación de las 3 recetas...\n");

  for (const plate of selectedRecipes) {
    const result = await cookingRecipe(plate);
    console.log(result);
    console.log("---");
  }

  console.log("\n✅ ¡Todas las recetas están listas!");
};

cookingThreeRecipes();
