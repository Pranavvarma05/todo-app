import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app">
            <Header taskCount={tasks.length} />
            <AddTaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
};

export default App;