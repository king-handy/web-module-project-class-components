import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
      task: '',
      id: 1,
      complete: false
  }
]

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo
    }
    setTimeout(() => {this.addTodo({preventdefault: () => {}}, 'another task')}, 2000);
  }

  addTodo = (e, item) => {
    e.preventdefault();
    const newItem = {
      name: item,
      id: Date.now(),
      complete: false
    }
    this.setState({todo: [...this.state.todo, newItem]})
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Todo App!</h2>
        <TodoForm test='test' addItem={this.addItem} />
        <TodoList completed={this.toggle} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
