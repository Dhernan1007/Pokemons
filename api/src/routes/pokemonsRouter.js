const {Router} = require('express');
const getPokemons = require('../handlers/handlersPokemon/getPokemon');
const getPokemonByID = require('../handlers/handlersPokemon/getPokemonByID')
const getPokemonsName = require('../handlers/handlersPokemon/getPokemonsName')
const validate = require('../middleware/validation.js')
const getCreatePokemon = require('../handlers/handlersPokemon/getCreatePokemon')
const pokemonRouter = Router();

pokemonRouter.get('/', getPokemons)
pokemonRouter.get('/name', getPokemonsName)
pokemonRouter.get('/:idPokemon', getPokemonByID)
pokemonRouter.post('/', validate, getCreatePokemon)

module.exports = pokemonRouter;