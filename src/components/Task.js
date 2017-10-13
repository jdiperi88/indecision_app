import React, { Component } from 'react';

const Task = (props) =>{
    return (
        <div>
            {props.task}
            <button 
                onClick={(e)=>{
                    props.handleDeleteTask(props.task)

                }}
            >
                Remove
            </button>
        </div>
    )
}

export default Task;