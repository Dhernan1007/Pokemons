module.exports = (req, res, next)=>{
    const {name, height, weight, hp, attack, defense, speed, type} = req.body;
        if(![name, height, weight, hp, attack, defense, speed, type].every(Boolean)){
            res.status(400).send('Fantan datos por ingresar')
        }else{
            next()
        }
    }
