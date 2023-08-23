require('dotenv').config();
const { Pokemon, Type } = require('../../db')
const axios = require('axios')
const helperDB = require('../../helpers/helperMapDB')
const helperApi = require('../../helpers/helperMapApi')
const {ALL_POKE_BY_API} = process.env
module.exports = async (idPokemon, search) => {


    const pokemonFind =
        search === 'api' ? helperApi(await axios(ALL_POKE_BY_API +`/${idPokemon}`))

            : helperDB([await Pokemon.findByPk(idPokemon, {
                include: [{
                    model: Type,
                    attributes: ['id'],
                    through: {
                        attributes: [],
                    }
                }]
            })
            ])
    if (search === 'api') {
        let result = [pokemonFind].filter(pokeID => pokeID.id === Number(idPokemon))
        return result
    }
    return pokemonFind;
}







