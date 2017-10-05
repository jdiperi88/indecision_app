import React, {Component} from 'react';
import Action from './Action'
import AddTask from './AddTask'
import Tasks from './Tasks'

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : ['joey','test','12321']
        }
        this.handleChooseTask=this.handleChooseTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteTasks =this.handleDeleteTasks.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleChooseTask(){
        console.log(this.state.tasks);
        const randomTask = Math.floor(Math.random()*this.state.tasks.length);
        return <p>this.state.tasks[randomTask]</p>

    }

    handleDeleteTasks(){
        this.setState(()=>{
            return {   
                tasks: []
            
            }
        })
        console.log(this.state.tasks);
    }

    handleSubmit(){
        console.log('working23213')
    }
    handleAddTask(task){
        this.setState((prevState)=>{
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }

    render(){
        return(
            <div> 
                <Action 
                    task ="Choose Task"
                    handleTask = {this.handleChooseTask} 
                />
                <Action 
                    task ="Delete Tasks"
                    handleTask = {this.handleDeleteTasks} 
                />
                <Tasks tasks={this.state.tasks} />
                <AddTask handleAddTask={this.handleAddTask} />
                
            </div>
        );
    }
    

}

export default IndecisionApp;