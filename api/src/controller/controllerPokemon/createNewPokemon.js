const { Pokemon, Type } = require('../../db');

module.exports = async (name, image, height, weight, hp, attack, defense, speed, type) => {

   // Crear un nuevo Pokémon en la base de datos
   const pokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
   });

   // Buscar el tipo especificado en la base de datos
   const pokeType = await Type.findAll({
      where: {
         name: type
      }
   });

   // Asociar el tipo al Pokémon creado en la base de datos
   await pokemon.addType(pokeType);

   // Buscar el Pokémon recién creado con su tipo asociado
   const searchPoke = await Pokemon.findOne({
      where: {
         id: pokemon.id
      },
      include: [{
         model: Type,
         attributes: ['name'],
         through: {
            attributes: []
         }
      }]
   });

   // Devolver el Pokémon con su tipo correspondiente
   return searchPoke;
}