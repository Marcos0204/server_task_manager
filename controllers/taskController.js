const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator')

//create new task

exports.createTask = async (req, res) =>{
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    const { project } = req.body;
    try {
        const existsProject = await Project.findById(project)
        if (!existsProject){
            return res.status(404).json({msg:'proyecto no encontrado'})
        }
        // verify project actual
        if(existsProject.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        // create the task
        const task = new Task(req.body)
        await task.save()
        res.json({task})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error, al crear la tarea')
    }


}