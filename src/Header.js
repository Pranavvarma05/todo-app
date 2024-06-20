import React from 'react';

const Header = ({ taskCount }) => {
    return (
        <header>
            <h1>Todo List</h1>
            <p>You have {taskCount} tasks</p>
        </header>
    );
};

export default Header;
