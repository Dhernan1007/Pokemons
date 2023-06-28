const getPokemonsName = require('../controller/controllerPokemon/getAllPokemonName')

module.exports = async (req, res)=>{
    const {name} = req.query;
    try {
        if(name){
            const nameLower = name.toLowerCase();
            const pokeName = await getPokemonsName(nameLower)
            return res.status(200).json(pokeName)
        }else {
        throw new Error('Nombre de Pokémon no especificado');
      }
    

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

