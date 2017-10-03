import React, {Component} from 'react';
import Action from './Action'

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        this.handleAddTask=this.handleAddTask.bind(this);
    }
    handleAddTask(){
        console.log('working');
    }
    render(){
        return(
            <div> 
                {/* <Tasks /> */}
                <Action 
                    task ="Add Task"
                    handleAddTask = {this.handleAddTask} 
                />
            </div>
        );
    }
    

}

export default IndecisionApp;