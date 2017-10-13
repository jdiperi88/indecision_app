import React, { Component } from 'react';
import Task from './Task'

class Tasks extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.tasks.map((task, i) => {
                    return (<Task 
                                key={i}
                                task={task}
                                handleDeleteTask={this.props.handleDeleteTask}
                            />
                    )
                })}
            </div>
        )
    }
}

export default Tasks