import { useState } from 'react';
import LoginForm from './../Login/LoginForm';

function LandingPage(props) {

    
    
    return (
        <>
        <div className="container">
            <h1>Landing Page</h1>
        </div>
        <div className='header-login-form'>
            <LoginForm />
        </div>
        </>
    )
}

export default LandingPage;