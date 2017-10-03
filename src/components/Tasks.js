import React, { Component } from 'react';

class Tasks extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.tasks.map((task, i) => {
                    return <p key={i}>{task}</p>
                })}
            </div>
        )
    }
}

export default Tasks