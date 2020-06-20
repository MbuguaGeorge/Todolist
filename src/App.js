import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'meeting with employees',
        completed: false
      },
      {
        id: 4,
        title: 'read story to maxine',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id ===id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
  }

  addTodo = (title) => {
    const newTodo ={
      id: 5,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}  />
      </div>
    </div>
  );
}
}

export default App;
