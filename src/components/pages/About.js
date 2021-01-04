import React from 'react'

function About() {
    return (
        // ghost element doesnt show in dom but need in JSX
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a
                React crash course
            </p>
        </React.Fragment>
    )
}

export default About;