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

    
//     return typePokemon;
// }

module.exports = async () => {
    const getData = await axios(`https://pokeapi.co/api/v2/type`);
    const getType = getData.data.results;
  
    const typePokemon = await Type.bulkCreate(
      getType.map((type) => {
        return {
          name: type.name,
        };
      })
    );
  
    return {
      types: typePokemon,
    };
  };