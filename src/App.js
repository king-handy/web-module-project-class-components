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
  }

  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return { ...todo };
        }
      }),
    })
  }

  clearCompleted = (e) => {
    e.preventdefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted} />
        <TodoForm addItem={this.addItem} />
        <br />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
