const { Pokemon, Type } = require('../../db');

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

    console.log(idTypes);

   await pokemon.addType(idTypes)

    const pokemonRelation = await Pokemon.findOne({
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

    

    return pokemonRelation;
}
