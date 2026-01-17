// ### 1. Basic Props
// Create a `UserProfile` component that accepts `name`, `age`, and `email` 
// as props. Render a simple profile card displaying this information.


const UserProfile = (props) => {
    return (
        <div className='card-container'>
            <div>Name: {props.name}</div>
            <div>Age: {props.age} </div>
            <div>E-mail: {props.email}</div>
        </div>
    )
}

export default UserProfile