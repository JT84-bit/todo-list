import User from "./user";

let currentProject;

const userUi = document.querySelector(".user-interface");
const projectUi = document.querySelector(".project-interface");
const projectView = document.querySelector(".project-view");
const projectViewHeader = document.querySelector(".project-view-header");
const todoView = document.querySelector(".todo-view")
const todoPop = document.querySelector(".todoPop");

const user = new User();
user.addProject("default project");
let firstProject = user.projects();
projectViewHeader.textContent = firstProject["default project"].name;

function renderProjects(){

    const createdProjects = document.querySelector(".createdProjects")
    
    while(createdProjects.firstChild){
        createdProjects.removeChild(createdProjects.lastChild);
      };

    let allProjects = user.projects();
    
    for( const [key, value] of Object.entries(allProjects)){

        const projectButton = document.createElement("button");
        projectButton.classList.add("projectButton");
        projectButton.textContent = key;
        projectButton.addEventListener("click", () => {
            currentProject = value;
            console.log(currentProject);
            projectViewHeader.textContent = key;
            showTasks();
        });
        createdProjects.appendChild(projectButton)
    } 
    
}; 

function addNewProject(projectName){
    user.addProject(projectName)
};

function addNewTodos(newTodoName, newTodoDescription, newTodoDate, newTodoPriority){
    currentProject.addTodo(newTodoName, newTodoDescription, newTodoDate, newTodoPriority);
}

function addFirstTodo(){
    firstProject["default project"].addTodo("default todo", "Just Default things", "2024-01-24", "Priority 3")
}

function showTasks(){

    while(todoView.firstChild){
        todoView.removeChild(todoView.lastChild);
      }; 

    const addNewTodo = document.createElement("button");
    addNewTodo.addEventListener("click", () => {
        todoPop.classList.remove("hidden")
    })
    addNewTodo.textContent = "Add ToDo"
    addNewTodo.classList.add("addNewTodo");
    todoView.appendChild(addNewTodo);
    
    if(typeof currentProject.todos === "undefined"){
        return;
    }else {
        let todoList = currentProject.todos;

        if(todoList.length != 0){
            for(const [topic, todoObject] of Object.entries(todoList)){
    
                const newTodo = document.createElement("div");
                const newTodoTopic = document.createElement("div");
                const newInfoField = document.createElement("div")
                const newTodoDescription = document.createElement("p");
                const newTodoDate = document.createElement("p");
                const todoPriority = document.createElement("p");
                const removeTodo = document.createElement("button");

                newTodoTopic.classList.add("todoTopic");
                newInfoField.classList.add("infoField");
                newTodoDescription.classList.add("todoDescription");
                newTodoDate.classList.add("todoDate");
                todoPriority.classList.add("todoPriority");
                removeTodo.classList.add("removeTodo");

                removeTodo.addEventListener("click", () => {
                    currentProject.removeTodo(topic);
                    showTasks();
                })

                newTodoTopic.textContent = todoObject.topic;
                newTodoDescription.textContent = "Description: " + todoObject.description;
                newTodoDate.textContent = "Due date: "+ todoObject.duedate;
                todoPriority.textContent = todoObject.priority;
                removeTodo.textContent = "Remove"
                newInfoField.append(newTodoDescription, newTodoDate, todoPriority)
                newTodo.append(newTodoTopic, newInfoField, removeTodo)
                newTodo.classList.add("todoItem");

                if(todoObject.priority === "Priority 1"){
                    newTodo.classList.add("p1")
                }else if(todoObject.priority === "Priority 2"){
                    newTodo.classList.add("p2")
                }else {
                    newTodo.classList.add("p3")
                }

                todoView.appendChild(newTodo);
            };
        }
    }
}


export {renderProjects, addNewProject, showTasks, addNewTodos, addFirstTodo, currentProject};