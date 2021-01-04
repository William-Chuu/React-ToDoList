import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, markComplete, delTodo}) {
    // destructuring to pull the values out of todo
    const {id, title, completed} = todo;
    //.bind to know exactly which ID we are marking complete or else will do every single one
    // .bind will select that INSTANCE when you click markcomplete ID.
  return (
    <div style={ getStyle(todo) }>
        <p>
            <input type="checkbox"
            defaultChecked={completed} 
            onChange={ markComplete.bind(this, id) }/> {' '}
            {title}
            <button onClick={ delTodo.bind(this, id) } style={ btnStyle }>x</button>
        </p>
    </div>
  )
}

const btnStyle = {
    // red
    background: '#ff0000',
    // white
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

function getStyle(todo) {
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        // ternary operator
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
}

// {todo} is not array this time but individual objects
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:  PropTypes.func.isRequired
}

export default TodoItem;
