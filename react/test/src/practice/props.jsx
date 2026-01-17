import React from 'react';
import UserProfile from '../components/userprofile';
import '../styles/App.css';
import Container from '../components/container';
import Button from '../components/button';

const Props = () => {
    const handleClick = ()=>{
        alert("Button Clicked!")//temporary feedback for my monkey brain 🐒 for now
    }
    return (
        <div>
            <h2>Props Example</h2>
            <div className='answer-container'>
                <p>Q.1</p>
                <UserProfile name="Ashwin" age={23} email="aswinbaral2@gmail.com" />
                <UserProfile name="Barsha" age={31} email="varshakoirala@gmail.com" />
            </div>
            <div className="answer-container">
                <p>Qn.2</p>
                <UserProfile name="Aakash"  age={19} />
            </div>
            <div className="answer-container">
                <p>Q.3</p>
                <Container><UserProfile name="Bhidu" age={20} email="chikumaya18@gmail.com" /></Container>
                <Container> <UserProfile name="Luppi Budo" age={21} /> </Container>
            </div>
            <div className="answer-container">
                <p>Q.4</p>
                <Button onClick={handleClick} />
            </div>
        </div>
    );
};

export default Props;
