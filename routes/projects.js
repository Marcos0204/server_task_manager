const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');
const { check } = require('express-validator')

// creat projejct
//api project

router.post('/',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty()
    ],
    projectController.createProject
)

router.get('/',
    auth,
    projectController.getPojects
)


module.exports = router;