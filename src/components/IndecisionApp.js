import React, {Component} from 'react';
import Action from './Action'
import AddTask from './AddTask'
import Tasks from './Tasks'

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        this.handleChooseTask=this.handleChooseTask.bind(this);
        this.handleDeleteTasks =this.handleDeleteTasks.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    componentDidMount(){

        try {
            const json = localStorage.getItem('tasks');
            const tasks = JSON.parse(json);
            if(tasks){
                this.setState(() => ({ tasks }));
            }
        } catch(e){
            // do nothing at all!
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if( prevState.tasks.length !== this.state.tasks.length){
            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks',json);
        }

    }
    handleChooseTask(){
        console.log(this.state.tasks);
        const randomTask = Math.floor(Math.random()*this.state.tasks.length);
        return alert(this.state.tasks[randomTask])

    }

    handleDeleteTasks(){
        this.setState(()=> ({tasks: []}))
    }


    handleDeleteTask(taskToRemove){
        this.setState((prevState)=>{
            return {tasks: prevState.tasks.filter(task =>{
                return taskToRemove !== task;
            })
        }
        });
    }

    handleAddTask(task){
        if(!task){
            return "Enter Valid Task!";
        } else if(this.state.tasks.indexOf(task)>-1){
            return "Task has already been entered!"
        }
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
                {this.state.tasks.length === 0 && <p>Please add a task to get start</p>}
                <Tasks 
                    tasks={this.state.tasks} 
                    handleDeleteTask= {this.handleDeleteTask} 
                />
                <AddTask handleAddTask={this.handleAddTask} />
                
            </div>
        );
    }
    

}

export default IndecisionApp;