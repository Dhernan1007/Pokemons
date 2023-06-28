const {Router} = require('express');
const getPokemons = require('../handlers/getPokemon.js');
const getPokemonByID = require('../handlers/getPokemonByID.js')
const getPokemonsName = require('../handlers/getPokemonsName.js')
const validate = require('../middleware/validation.js')
const getCreatePokemon = require('../handlers/getCreatePokemon.js')
const pokemonRouter = Router();

pokemonRouter.get('/', getPokemons)
pokemonRouter.get('/name', getPokemonsName)
pokemonRouter.get('/:idPokemon', getPokemonByID)
pokemonRouter.post('/', validate, getCreatePokemon)

module.exports = pokemonRouter;