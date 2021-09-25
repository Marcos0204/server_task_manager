// Routes for auth users

const express = require('express');
const router = express.Router();
const {check } = require('express-validator');
const authController = require('../controllers/authController');

// api auth

router.post('/',
    [
        check('email', 'agrega un email valido').isEmail(),
        check('password', 'el password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    authController.authenticateUser
);

module.exports= router;