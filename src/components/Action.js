import React, {Component } from 'react';

class Action extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.handleAddTask}> {this.props.task} </button>
        )
    }
}

export default Action;