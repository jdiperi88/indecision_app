import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) =>{
    return (
        <Modal
            isOpen={!!props.selectedTask}
            contentLabel='Selected Task'
            onRequestClose={props.clearSelectedTask}
        >
            {props.selectedTask &&<h1>{props.selectedTask}</h1>}
            <button onClick={props.clearSelectedTask}> 
                Okay
            </button>
            
        </Modal>
    )
}

export default TaskModal;