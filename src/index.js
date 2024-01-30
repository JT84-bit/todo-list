import './style.css';
import {renderProjects, addNewProject, showTasks, addNewTodos, addFirstTodo, currentProject } from './Modules/screen';
import Project from './Modules/project';


function start(){
    
    const userUi = document.querySelector(".user-interface");
    const projectUi = document.querySelector(".project-interface");

    // Project form
    const projectPop = document.querySelector(".projectPop");
    const popForm = document.querySelector("#popForm");
    const projectName = document.querySelector("#projectName");
    
    // Todo form 
    const tpopForm = document.querySelector("#tpopForm");
    const tName = document.querySelector("#topic");
    const tDescription = document.querySelector("#description");
    const tDate = document.querySelector("#dueDate");
    const tPriority = document.querySelector("#priority");
    const todoPop = document.querySelector(".todoPop");

    const addProjectButton = document.createElement("button");
    const createdProjects = document.createElement("div");
    const createdProjectsHeader = document.createElement("div");
    createdProjectsHeader.classList.add("createdHeader");
    createdProjects.classList.add("createdProjects");
    addProjectButton.classList.add("addProjectButton");
    createdProjectsHeader.textContent = "All Projects"
    addProjectButton.textContent = "Add Project"

    addProjectButton.addEventListener("click", () => {
        projectPop.classList.remove("hidden")
    });
    
    
    userUi.appendChild(addProjectButton);
    userUi.appendChild(createdProjectsHeader);
    userUi.appendChild(createdProjects);

    popForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let newProjectName = projectName.value;
        addNewProject(newProjectName);
        projectPop.classList.add("hidden");
        popForm.reset();
        renderProjects();
    });

    tpopForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let newTodoName = tName.value;
        let newTodoDescription = tDescription.value;
        let newTodoDate = tDate.value;
        let newTodoPriority = tPriority.value;

        addNewTodos(newTodoName, newTodoDescription, newTodoDate, newTodoPriority);
        todoPop.classList.add("hidden");
        tpopForm.reset();
        showTasks();
    })
}

start();
renderProjects();
addFirstTodo();
const firstButton = document.querySelector(".projectButton");
firstButton.click();
showTasks();

