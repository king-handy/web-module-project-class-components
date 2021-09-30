import React from 'react';

import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: todo,
    };
  }

  completed() {
    this.state.todo = [];
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList completed={this.state.completed} todo={todo}/>
      </div>
    );
  }
}

export default App;
