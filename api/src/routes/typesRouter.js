const {Router} = require('express')
const getAllType = require('../handlers/handlerType/getType')

const typeRouter = Router()

typeRouter.get('/', getAllType)

module.exports = typeRouter