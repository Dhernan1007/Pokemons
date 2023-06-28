const createPokemon = require('../controller/controllerPokemon/createNewPokemon')

module.exports = async (req, res)=>{
    try {
        const {name, image, height, weight, hp, attack, defense, speed, type} = req.body
        const createPoke = await createPokemon(name, image, height, weight, hp, attack, defense, speed, type)
        res.status(201).json(createPoke);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

