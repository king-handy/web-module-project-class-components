import React from 'react';

class ToDoForm extends React.Component {
    return (
        <form>
            <input type='text' name='item' />
            <button>Add ToDo</button>
            <button>Completed</button>
        </form>
    )
}

export default ToDoForm;