const { Pokemon, Type } = require('../../db');

// Función para crear un nuevo Pokémon en la base de datos
module.exports = async (name, image, height, weight, hp, attack, defense, speed, types, createdInDb) => {
   try {
      // Crear el Pokémon en la base de datos
      const pokemon = await Pokemon.create({
         name,
         image,
         hp,
         attack,
         defense,
         speed,
         height,
         weight,
         createdInDb
      });

      if (types && types.length > 0) {
         // Buscar los tipos especificados en la base de datos
         const pokeTypes = await findTypesByName(types);

         // Asociar los tipos al Pokémon creado en la base de datos
         await pokemon.addTypes(pokeTypes);
      }

      // Buscar el Pokémon recién creado con sus tipos asociados
      const searchPoke = await findPokemonWithTypes(pokemon.id);

      // Devolver el Pokémon con sus tipos correspondientes
      return searchPoke;
   } catch (error) {
      console.error('Error al crear el Pokémon:', error);
      throw error;
   }
};

//Función para buscar tipos por sus nombres en la base de datos
const findTypesByName = async (typeNames) => {
   try {
      const types = await Type.findAll({
         where: {
            name: typeNames
         }
      });
      return types;
   } catch (error) {
      console.error('Error al buscar los tipos:', error);
      throw error;
   }
};

//Función para buscar un Pokémon con sus tipos asociados en la base de datos
const findPokemonWithTypes = async (pokemonId) => {
   try {
      const searchPoke = await Pokemon.findOne({
         where: {
            id: pokemonId
         },
         include: [{
            model: Type,
            attributes: ['name'],
            through: {
               attributes: []
            }
         }]
      });
      return searchPoke;
   } catch (error) {
      throw error;
   }
};


// module.exports = async (name, image, height, weight, hp, attack, defense, speed, type, createdInDb) => {

//   //Crear el Pokémon en la base de datos
//       const pokemon = await Pokemon.create({
//          name,
//          image,
//          hp,
//          attack,
//          defense,
//          speed,
//          height,
//          weight,
//          createdInDb
//       });


//     const idTypes = await Type.findAll({
//         where: { name: type }
//     })

//     console.log(idTypes);

//    await pokemon.addType(idTypes)

//     const pokemonRelation = await Pokemon.findOne({
//       where:{
//          id: pokemon.id
//       },
//       include: [
//          {
//          model: Type,
//          attributes: ['name'],
//          through: {
//             attributes: []
//          }
//          }
//       ]
//     })

    

//     return pokemonRelation;
// }
