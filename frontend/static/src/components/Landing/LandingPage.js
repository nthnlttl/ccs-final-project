import { useState } from 'react';
import LoginForm from './../Login/LoginForm';
import AnimalForm from './../Animals/AnimalForm';
function LandingPage(props) {

    
    
    return (
        <>
        <div className="container">
            <h1>Welcome to S.N.A.P.</h1>
        </div>
        <AnimalForm />

        </>
    )
}

export default LandingPage;