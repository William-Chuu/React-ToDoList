import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'
// useState is a 'hook' that lets us add state to function components
import React, {useState, useEffect} from 'react'
import { mockComponent } from 'react-dom/test-utils'
import Axios from 'axios'

import './App.css'

function App() {
  //[current state, function to update state] - like fields
  // res = response
  const [todos, setTodos] = useState([])
  useEffect(() => {
    console.log('useEffect')
  
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  },[setTodos])
 
  // toggle complete
  function markComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        // set to opposite (toggles)
        todo.completed = !todo.completed
      }
      return todo
    }));
  }

  // return todos that DO NOT match the id 
  function delTodo(id) {
    console.log(id)
    // for each todo return todo where id is not equal to passed id
    // ... = spread operator which copies what is already there
    // .filter() copies array and keeps elements in array if the function = true. so will get array of elements where todo.id !== id that is passed in.
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos(todos.filter(todo => todo.id !== id)))
  }

  // res = response
  function addTodo(title) {
    console.log(title); 
    // second paramter is object
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => {console.log('ok',[...todos, res.data]);setTodos([...todos, res.data])}).catch(e => console.log('error', e))
      console.log('test');
  }

  // console.log()
  // exact excludes everything in the "/" route and just displays "/about" route
  // issue is we have 2 components displaying (addtodo + todos)
  // need render props
  return (
    <Router>
      <div className="App"> 
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} markComplete={markComplete} delTodo={delTodo}/> 
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  )
}

export default App;
