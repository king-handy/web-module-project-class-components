import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name='item' />
                <button>Add Item</button>
                <button onClick={props.completed}>Completed</button>
            </form>
        )
    }
}

export default TodoForm;
