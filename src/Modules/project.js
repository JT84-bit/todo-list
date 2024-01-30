import Todo from './todo'

class Project {
    constructor(name){
        this._name = name;
        this._todos = {};
    };

    get name(){
        return this._name;
    };

    get todos(){
        return this._todos;
    };

    removeTodo(topic){
        delete this._todos[topic];
    };

    addTodo(topic, description, duedate, priority){
        let newTodo = new Todo(topic, description, priority ,duedate)
        this._todos[topic] = newTodo;
    };
};

export default Project;