// ### 1. Basic Props
// Create a `UserProfile` component that accepts `name`, `age`, and `email` 
// as props. Render a simple profile card displaying this information.


// ### 2. Conditional Rendering
// Modify the `UserProfile` component to conditionally display the email 
// only if it's provided. If no email is given, show a message saying "Email is not provided".


const UserProfile = (props) => {
    return (
        <div className='card-wrapper'>
            <div>Name: {props.name}</div>
            <div>Age: {props.age} </div>
            {/* conditional rendering */}
            <div> {props.email ? `E-mail: ${props.email}` : "Email is not provided."}</div>
        </div>
    )
}

export default UserProfile