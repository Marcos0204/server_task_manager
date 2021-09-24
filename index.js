
const express = require('express');

// create the server

const app = express();

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