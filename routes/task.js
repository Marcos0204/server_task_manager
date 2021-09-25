const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { check } = require('express-validator')

//create new task
//api/tareas
router.post('/',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty(),
        check('project', 'el proyecto  es obligatorio').not().isEmpty()
    ],
    taskController.createTask
)

module.exports= router;