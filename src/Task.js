import React from 'react';

const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            <p>{task.text}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
