// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

class TodoList extends React.Component {

    render() {
        return (
            <div>
              {props.}
                <TodoForm />
                <Todo />
            </div>
        )
    }
}

export default TodoList;
