const { Pokemon, Type } = require('../../db')
const axios = require('axios')
const helperDB = require('../../helpers/helperMapDB')
const helperApi = require('../../helpers/helperMapApi')

module.exports = async (idPokemon, search) => {


    const pokemonFind =
        search === 'api' ? helperApi([await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)])

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
console.log(pokemonFind)
    if (search === 'api') {
        pokemonFind.filter(pokeID => pokeID.id === Number(idPokemon))
    }
    return pokemonFind;
}







