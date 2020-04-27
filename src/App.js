import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo'
import About from './components/pages/About'
import {v1 as uuid} from "uuid";


import './App.css';


class App extends Component{
  state = {
     todos:[
       {
         id:uuid(),
         title:'Put garbage to the trash',
         completed:false
       },
       {
        id:uuid(),
        title:'Wash the car',
        completed:false
      },
      {
        id:uuid(),
        title:'Meeting with boss',
        completed:false
      }
     ]
  }

  //Toggle todo completed
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) =>{
    this.setState({todos:[...this.state.todos.filter(todo =>todo.id !==id)]})
  }

  addTodo = (title) =>{
    const newTodo ={
      id:uuid(),
      title:title,
      completed:false
    }
    this.setState({todos: [...this.state.todos,newTodo]})
  }

  render(){
    //console.log(this.state.todos)
    return(
      <Router>
        <div className="App">

          <Header/>

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos = {this.state.todos}  markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>

          <Route path="/about" component={About}/>
        
        </div>
      </Router>
    );
  }
}
export default App;
