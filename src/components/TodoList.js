// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/Todo';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    task: 'wash dishes',
                    id: 1,
                    completed: false
                },
                {
                    task: 'mop floor',
                    id: 2,
                    completed: false
                }
            ]
        }
    }
    
    complete = () => {
        this.props.completed();
    }

    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoList;
