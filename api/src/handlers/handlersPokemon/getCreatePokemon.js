const createPokemon = require('../../controller/controllerPokemon/createNewPokemon')

module.exports = async (req, res)=>{
    try {
        const {name, image, height, weight, hp, attack, defense, speed, type, createdInDb} = req.body
        const createPoke = await createPokemon(name, image, height, weight, hp, attack, defense, speed, type, createdInDb)
        res.status(201).json(createPoke);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

