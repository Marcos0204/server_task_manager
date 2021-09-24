
const express = require('express');

const conectarDB = require('./config/db')

// create the server

const app = express();

//conect DB
conectarDB()
// port of the app
const PORT = process.env.PORT || 4000;

// definit 
app.get('/', (req, res)=>{
    res.send('hola mundo')
})

// init the server

app.listen(PORT, ()=>{
    console.log(`arrancando el servidor ${PORT}`)
})