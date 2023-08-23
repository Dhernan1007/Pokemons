const getType = require('../../controller/controllerTypes/getAllTypes')

module.exports = async(req, res)=>{
    try {
        const allType = await getType()
        res.status(200).json(allType)
    } catch (error) {
        res.status(400).json({msn: error.message})
    }
}