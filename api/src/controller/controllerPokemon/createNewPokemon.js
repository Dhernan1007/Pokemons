const { Pokemon, Type } = require('../../db');
const helperMapDB = require('../../helpers/helperMapDB');

module.exports = async (name, image, height, weight, hp, attack, defense, speed, type, createdInDb) => {

  //Crear el Pokémon en la base de datos
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


    const idTypes = await Type.findAll({
        where: { name: type }
    })

    const setType = new Set();
    idTypes.forEach((type) => setType.add(type));

    await pokemon.addType(idTypes);


    const pokemonDB = await Pokemon.findOne({
      where:{
         id: pokemon.id
      },
      include: [
         {
         model: Type,
         attributes: ['name'],
         through: {
            attributes: []
         }
         }
      ]
    })

    let objPokemon = helperMapDB(pokemonDB)
    

    return objPokemon;
}
