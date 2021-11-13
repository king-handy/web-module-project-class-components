import React, { Component } from "react";

export default class ToDoForm extends Component {
    constructor() {
        super();
        this.state = {
            toDoText: ''
        }
    }

    handleChanges = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='todo-input'>Add Todo: </label>
                    <input 
                        id='todo-input' 
                        name='toDoText'
                        value={this.state.toDoText} 
                        onChange={this.handleChanges} />
                </form>
            </div>
        )
    }
}
