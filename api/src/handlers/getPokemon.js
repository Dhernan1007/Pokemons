// const {Pokemon, Type} = require('../db')
const getAllPokemons = require('../controller/controllerPokemon/getAllPokemons')


module.exports = async (req, res) => {
    try {
        const pokemons = await getAllPokemons()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}