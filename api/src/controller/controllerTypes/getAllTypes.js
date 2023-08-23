const axios = require('axios');
const {Type} = require('../../db')


module.exports = async ()=>{
    const getData = await axios(`https://pokeapi.co/api/v2/type`)
    const getType = getData.data.results;

    const theType = getType.map(type =>{
        return {
            name: type.name
        }
    })

    await Type.bulkCreate(theType, 
     /* Ignora duplicados y no lanza excepciones, si el modelo no admite duplicados 
    respetará esa condición, de lo contrario seguirá creando*/
    { ignoreDuplicates: true }
    )
   
    
    const findType = await Type.findAll()

    return  findType;
}



