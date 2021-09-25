const User = require('../models/User')

exports.creatUser = async (req, res) =>{
    try {
        let user;
        // creat user new
        user = new User(req.body)

        // add user
        await user.save()

        // confir
        res.send('usuario creado correctamente')
    } catch (error) {
        console.log(error)
        res.status(400).send('hubo un error')
    }
}