// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const TodoList = props => {
    const completed = () => {
        props.completed();
    }

    return (
        <div className='todo-list'>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button className='completed' onClick={completed}>Completed</button>
        </div>
    );
}

export default TodoList;
