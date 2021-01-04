import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({addTodo}) {
    // want new todo to be a new state
    // COMPONENT level state vs app level
    const [title, setTitle] = useState('')
    
    // event parameter
    // if have multiple inputs [e.target.name] and name should = state name
    function onChange(e) {
        // state will change dynamicaly to what is in input field
        setTitle(e.target.value)
    }
    
    function onSubmit(e) {
        // to prevent from submitting to actual file
        e.preventDefault();
        addTodo(title)
        // clear field after submitting
        setTitle('')
    }

    return (
        <form onSubmit={onSubmit} style= {{ display: 'flex' }}>
            <input
                type='text' 
                name='title' 
                style={{flex: '10', padding: '5px'}}
                placeholder='Add Todo ...'
                // = the state
                value={title}
                // when enter text
                onChange={onChange}
            />
            <input
                type='submit'
                value='Submit'
                className='btn'
                style={{flex: '1'}}
            />
        </form>
    )
}

// Proptypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
