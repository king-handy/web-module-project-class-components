import React from 'react';

const TodoForm = props => {
        return (
            <form>
                <input type='text' name='item' />
                <button>Add Item</button>
                <button onClick={props.completed}>Completed</button>
            </form>
        )
}

export default TodoForm;
