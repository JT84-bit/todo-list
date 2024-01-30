class Todo {
    constructor(topic, description, priority, duedate){
        this._topic = topic
        this._description = description
        this._priority = priority
        this._duedate = duedate
    };

    get topic(){
        return this._topic
    };

    get description(){
        return this._description
    };

    get priority(){
        return this._priority
    };

    get duedate(){
        return this._duedate;
    }
};

export default Todo;
