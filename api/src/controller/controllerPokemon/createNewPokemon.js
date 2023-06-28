// controller.js
 const { Pokemon, Type } = require('../../db');
 const {Op} = require('sequelize')
 const pokeTypes = require('../controllerTypes/getAllTypes')

// module.exports = async (name, height, weight, hp, attack, defense, speed, type) => {
//   try {
//     // Buscar el Pokémon en la base de datos o crear uno nuevo si no se encuentra
//     const [pokemon, created] = await Pokemon.findOrCreate({

// /* [pokemon, created] es una destructuración de la matriz devuelta por findOrCreate. 
// Asignamos el primer elemento a la variable pokemon y el segundo elemento a la variable created.

// pokemon contiene el Pokémon encontrado en la base de datos o el Pokémon recién creado.

// created es un indicador booleano que indica si se creó un nuevo Pokémon (true) o si se encontró uno existente (false). */

//       where: { name }, // Buscar por el nombre del Pokémon
//       defaults: {
//         hp,
//         attack,
//         defense,
//         speed,
//         height,
//         weight,
//       },
//       include:{
//         model: Type,
//         attribute:{
//             name: `${type}`
//         }
//       }
//     });

//     if (!created) {
//       // Si el Pokémon ya existía en la base de datos, lanzar una excepción
//       throw new Error('El Pokémon ya existe');
//     }

//     return pokemon;
//   } catch (error) {
//     throw new Error('No se pudo crear el Pokémon');
//   }
// };
/* {  
	"name": "bobofet",
   "image": "yu.png",
   "hp": 33,
   "attack": 33,
   "defense": 33,
   "speed": 33,
   "height": 33,
   "weight": 33,
   "type": "campus",
} */

module.exports = async (name, image, height, weight, hp, attack, defense, speed, type)=>{

   // const filterPokeTypes = await pokeTypes.filter(element =>{
   //    element.name
   // }).map(ele =>{
   //    ele.id
   // })

   const pokemon= await Pokemon.create({
      // where:{name},
      // defaults:{
         name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            type,
            
      //   }
   })

// console.log(pokemon[0]);

   // if(!createPoke){
   //    throw new Error('Este pokemon ya existe')
   // }
   const pokeType = await Type.findOne({
      where:{
         name: type
      }
   })
   const pokemonT = await pokemon.addType(pokeType)
   


// const searchPoke = await Type.findAll({
//    where: {name: type}
// })

// await searchPoke.forEach(async (t) => {
//    console.log(t, 'soy el t');
//    await pokemon.addType(t)
//    console.log(pokemon);
// });

// console.log(searchPoke);
// console.log(pokemon);
return pokemonT;


//           const foundType = await Type.findOrCreate({
//             where: { name: type }
//           });
//          // console.log(foundType);
      
//       const pokemon= await Pokemon.create({
        
//          // nota si al dafault lo coloco sin "S" al final me creará todos las propiedades pero solo dará valor a una, mientras que agregando la "S" (defaults) si agrega todos los valores
         
//             name, image, height, weight, hp, attack, defense, speed,
//       })
      
      
//       await pokemon.addTypes(foundType[0].id)
     
// // console.log(pokemon);

// //console.log(foundTypes[0]?.dataValues?.id);

// const response = await Pokemon.findOne({
//    where:{name: name},
//    // include:{
//    //    model: Type,
//    //    through: {
//    //       attributes: [],
//    //   }
//    // }
// })
// // console.log(name);

//    // if(!createPokemon){
//    //   throw new Error('Este pokemon ya existe')
//    // }
// //console.log(response);
// return response;

}


