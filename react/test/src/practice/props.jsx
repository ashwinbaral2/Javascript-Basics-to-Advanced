import React from 'react';
import UserProfile from '../components/userprofile';
import '../styles/App.css';

const Props = () => {
    return (
        <div>
            <h2>Props Example</h2>
            <div className='answer-container'>
                <p>Qn.1</p>
                <UserProfile name="Ashwin" age={23} email="aswinbaral2@gmail.com" />
                <UserProfile name="Barsha" age={31} email="varshakoirala@gmail.com" />
            </div>
        </div>
    );
};

export default Props;
