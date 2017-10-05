import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props){
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(e){
        e.preventDefault();

        const task = e.target.elements.task.value.trim();
        if(task){
            this.props.handleAddTask(task);
    }
}
    render(){
        return(
            <form onSubmit={this.handleAddTask}>
                <input type="text" name="task" />
                <button>Add Task</button>
            </form>
        )
    }
}

export default AddTask