const getPokemonsByID = require('../../controller/controllerPokemon/getPokemonsByID')

module.exports = async(req, res)=>{
    const {idPokemon} = req.params
    const search = isNaN(idPokemon) ? 'db' : 'api';
    try {
       const pokeID = await getPokemonsByID(idPokemon, search);
       res.status(200).json(pokeID[0])
   } catch (error) {
       res.status(404).json({msg: error.message})
   }
}