const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// creat projejct
//api project

router.post('/', 
    projectController.createProject
)


module.exports = router;