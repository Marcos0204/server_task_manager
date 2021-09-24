const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'})

const conectarDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            
            
        })
        console.log('db conectada')
    } catch (error) {
        console.log(error)
        console.log('fallo')
        process.exit(1)
    }
};

module.exports= conectarDB;