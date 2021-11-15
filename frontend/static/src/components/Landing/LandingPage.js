import { useState } from 'react';
import './LandingPage.css';
import { Button } from 'react-bootstrap';

function LandingPage(props) {


    
    
    return (
        <>
        <div className="container">
            <h1>S.N.A.P.</h1>
            <p>Special Needs Animal Partnership</p>
        </div>
        <div>
            <Button variant='primary'>
            Special Needs Dogs
            </Button>
        </div>
        <div>
            <section>
            Special Needs Cats
            </section>
        </div>
        <div>
            
        </div>

        
        
        

        </>
    )
}

export default LandingPage;