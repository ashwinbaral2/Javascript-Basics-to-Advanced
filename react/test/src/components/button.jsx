// ### 4. Passing Functions as Props
// Create a `Button` component that accepts a `onClick` function as a prop. 
// The component should render a button that calls the function when clicked. 
// Then create a parent component that uses this Button component with a function 
// that logs "Button clicked!" to the console.
import React from 'react'

const Button = (props) => {
    return (
        <button className='button teal-glow' onClick={props.onClick}>
            Click me
        </button>
    )
}

export default Button