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


}