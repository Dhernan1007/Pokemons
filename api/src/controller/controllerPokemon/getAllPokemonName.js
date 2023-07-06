const {Pokemon, Type} = require('../../db')
const {Op} = require('sequelize')
const axios = require('axios')
const helperApi = require('../../helpers/helperApi')
const helperDB = require('../../helpers/helperDB')


module.exports = async (name)=>{

  //const nameLower = name.toLowerCase();

    const getNameToApi = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
//esto está bien




    /* Si no desea nada de la tabla de unión, puede proporcionar explícitamente una matriz vacía a la attributesopción dentro de la throughopción de la includeopción y, en este caso, no se obtendrá nada y la propiedad adicional ni siquiera se creará:

Foo.findOne({
  include: {
    model: Bar,
    through: {
      attributes: []
    }
  }
}); */

    
    if(getNameToApi){
      const infoNamePoke = helperApi(getNameToApi);
      return infoNamePoke
    }else{
      const pokeNameDB = await Pokemon.findOne({
        where: {
          name: name
        },
        include: [
          {
            model: Type,
            attributes: ["name"]
          }
        ],
      });
      if(pokeNameDB){
      const searchPokeDB = helperDB(pokeNameDB);
      return searchPokeDB;
    }else{
      throw new Error('No existen Pokemon con este nombre')
    }
}

}