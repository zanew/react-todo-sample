import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

function App() {
    // how you use "state" in functional components
    const [state, setState] = useState({
        todos: []
    });

    // functional equivalent of componentDidMount
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => setState({ todos: res.data }));
    }, []);

    let addTodo = (title) => {
        // spread operator ...
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        }).then( res => setState({ todos: [...state.todos, res.data] }));
        // const newTodo = {
        //     id: uuid.v4(),
        //     // don't have to do <title : title> in ES6 just title
        //     title,
        //     completed: false
        // };
        // setState({ todos: [...state.todos, newTodo] });
    };

    let markComplete = (id) => {
        setState({ todos: state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })});
    };

    let delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => setState({ todos: [...state.todos.filter(todo => todo.id !== id)] }));
    };

    // exact separates out the routes
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={addTodo} />
                    <h1>App</h1>
                    <Todos todos={state.todos} markComplete={markComplete} delTodo={delTodo}/>
                  </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
}

export default App;
