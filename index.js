
const express = require('express');

const conectarDB = require('./config/db')

// create the server

const app = express();

//conect DB
conectarDB()

// add express.json

app.use(express.json({ extended: true }))

// port of the app
const PORT = process.env.PORT || 4000;

//import routes 

app.use('/api/usuario', require('./routes/users'));



// def init 
app.get('/', (req, res)=>{
    res.send('hola mundo')
})

// init the server

app.listen(PORT, ()=>{
    console.log(`arrancando el servidor ${PORT}`)
})