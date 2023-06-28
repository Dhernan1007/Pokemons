const { Pokemon, Type } = require('../../db')
const axios = require('axios')
const apiHelper = require('../../helpers/helperApi')
const getPokedB = require('../../helpers/helperDB')


module.exports = async () => {
    const getDataApi = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
    const getPokemonApi = getDataApi.data.results;

    // en la api viene el nombre del pokemon junto a una propiedad url donde se encuentran todos los datos del pokemon. Entonces debo recorrer cada personaje, acceder a su url y por último extraer los datos.

    const allPokemonApi = await Promise.all(getPokemonApi.map(async element => {
        const pokemonData = await axios(element.url)
        return apiHelper(pokemonData);
    }));

//hasta aquí está bien
    

    const allPokemonDB = await Pokemon.findAll({
        include: [{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }]
    })

    const getDBpoke = allPokemonDB.map(pokeDB => getPokedB(pokeDB)) 

    let arrAllPoke = [...allPokemonApi, ...getDBpoke]

       return arrAllPoke;
}

