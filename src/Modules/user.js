import Project from './project.js';

class User{
    constructor(){
        this._projects = {};
    }

    addProject(projectName){
        let newProject = new Project(projectName);
        this._projects[projectName] = newProject;
    }

    projects(){
        return this._projects;
    }

};

export default User;

