require('dotenv').config();
const {Pokemon, Type} = require('../../db')
const axios = require('axios')
const helperApi = require('../../helpers/helperApi')
const helperDB = require('../../helpers/helperDB')
const {ALL_POKE_BY_API} = process.env

module.exports = async (name)=>{

    const getNameToApi = await axios(ALL_POKE_BY_API +`/${name}`);

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