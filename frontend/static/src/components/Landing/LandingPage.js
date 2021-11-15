import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import AnimalCard from './../Animals/AnimalCard';
import { Grid } from '@material-ui/core';
import AnimalForm from './../Animals/AnimalForm';
function LandingPage(props) {


    
    
    return (
        <>
        <div className="container">
            <section>
                <h1>S.N.A.P.</h1>
                <p>Special Needs Animal Partnership</p>
            </section>
            
            <AnimalCard />
            
        
        </div>
        </>
    )
}

export default withRouter(LandingPage);