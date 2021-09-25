const User = require('../models/User')

exports.creatUser = async (req, res) =>{

    const { email, password } = req.body

    try {
        //check that the registered user is unique

        let user= await User.findOne({email});
        if (user){
            return res.status(400).json({msg: 'el usuario ya existe'})
        }
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