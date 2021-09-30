// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/Todo';

class TodoList extends React.Component {
    constructor() {
        super();
    }
    
    complete = () => {
        this.props.completed();
    }

    render() {
        return (
            <div className='todo-list'>
                {this.props.todo.map(item => (
                    <Todo key={item.id} item={item} />
                ))}
                <button className='completed' onClick={this.complete}>Completed</button>
            </div>
        );
    }
}

export default TodoList;
