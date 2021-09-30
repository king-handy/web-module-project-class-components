import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
      task: 'Organize',
      id: 1,
      completed: false
  }
]

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
        <TodoForm />
        <TodoList completed={this.completed} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
