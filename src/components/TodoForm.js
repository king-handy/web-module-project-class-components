import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            item: ''
        }
    }
    handlechanges = e => {
        this.props.addItem(e, this.state.item);
        this.setState({item: ''});
    }

    updateItem = e => {
        this.setState({item: e.target.value})
    }

    render() {
        return (
            <form>
                <input type='text' name='item' value={this.state.value} onChange={this.updateItem} />
                <button onClick={this.handlechanges}>Add Item</button>
                {/* <button onClick={props.completed}>Completed</button> */}
            </form>
        )
    }
}

export default TodoForm;
