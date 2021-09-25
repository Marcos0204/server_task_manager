const Project = require('../models/Project')

exports.createProject = async (req, res) =>{
    try {
        // create new project
        const project = new Project(req.body)
        // save creator via jwt
        project.creator = req.user.id

        //save project
        project.save();
        res.json(project);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}