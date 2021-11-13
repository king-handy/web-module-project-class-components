import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(props) {
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
    setTimeout(() => {this.addTodo({preventdefault: () => {}}, 'another task')}, 2000);
  }

  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
        id: new Date(),
        completed: false
    }
    this.setState({
      todos: [...this.setState.todos, newTodo]
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
