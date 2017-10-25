import React, { Component } from 'react';

const Task = (props) =>{
    return (
        <div className='taskHolder'>
            <h1 className='task'>{props.task}</h1>
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