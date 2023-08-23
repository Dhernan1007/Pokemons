require('dotenv').config();
const { Pokemon, Type } = require('../../db')
const axios = require('axios')
const apiHelper = require('../../helpers/helperApi')
const getPokedB = require('../../helpers/helperDB')
const {ALL_POKE_API} = process.env


module.exports = async () => {
    const getDataApi = await axios(ALL_POKE_API);
    const getPokemonApi = getDataApi.data.results;

    const allPokemonApi = await Promise.all(getPokemonApi.map(async element => {
        const pokemonData = await axios(element.url)
        return apiHelper(pokemonData);
    }));

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

