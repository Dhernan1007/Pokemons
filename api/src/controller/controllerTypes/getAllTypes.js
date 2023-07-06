const axios = require('axios');
const {Type} = require('../../db')

// module.exports = async ()=>{
//     const getData = await axios(`https://pokeapi.co/api/v2/type`)
//     const getType = getData.data.results;

//     const typePokemon = await Type.bulkCreate(getType.map(type =>{
//         return {
//             name: type.name
//         }
//     }))
//     // ignora el duplicado y lanza una excepción 
//     const resultType = await Type.findAll({
//         where:{
//             name: ['name']
//         }
//     })
    
//     return  resultType ;
// }

module.exports = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/type');
  const types = response.data.results;
  const typesPoke = [];

  for (const type of types) {
    const find = await Type.findOne({
      where: {
        name: type.name.charAt(0).toUpperCase() + type.name.slice(1)
      }
    });

    if (!find) {
      const pokeType = await Type.create({
        name: type.name.charAt(0).toUpperCase() + type.name.slice(1)
      });

      typesPoke.push(pokeType);
    } else {
      typesPoke.push(find);
    }
  }

  return typesPoke;
};

