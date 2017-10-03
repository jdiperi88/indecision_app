import React, { Component } from 'react';

class AddTask extends Component {
    handleAddOption(){
        // e.preventDefault();

        // const task = e.target.elements.task.value;
        // if(this.props.handleAddOption(option));
    }
    render(){
        return(
            <form>
                <input type="text" name="task" />
                <button>Add Task</button>
            </form>
        )
    }
}

export default AddTask