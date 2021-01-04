import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos({todos, markComplete, delTodo}) {
  return (
    // for each loop kinda, for each todo we map through what we want to display (loop through todos)
    // maps creates a list(dict) which needs a key for each value 
    <div>
    {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo}/>
        ))
    }
    </div>
  )
}

//array of objects
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo:  PropTypes.func.isRequired
}

export default Todos;
