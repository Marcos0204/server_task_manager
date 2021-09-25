// Routes for creact users

const express = require('express');

const router = express.Router();

const userController= require('../controllers/userController')

// api users

router.post('/',
    userController.creatUser
);

module.exports= router;