import React, {Component } from 'react';

class Action extends Component { 
        constructor(props){
            super(props);
        }
        render(){
        return(
            <div>
                <button onClick={this.props.handleTask}> {this.props.task} </button>  
            </div>
            
        )
    }
 }


export default Action;