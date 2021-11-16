import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import {  withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage(props) {


    
    
    return (
        <>
        <div className="title">
            <section>
                <h1>S.N.A.P.</h1>
                <p>Special Needs Animal Partnership</p>
            </section>
        </div>
        <div className="container">
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title>Special Needs Cats</Card.Title>
                <Card.Text>
                Find a special furry feline to adopt!
                </Card.Text>
                <Link to='/animal_listing'>
                 <Button variant="primary">Cat Search</Button>
                </Link>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title>Special Needs Dogs</Card.Title>
                <Card.Text>
                Find a special puppers to adopt!
                </Card.Text>
                 <Button variant="primary">Dog Search</Button>
                </Card.Body>
            </Card>
            </div>
        </div>    
        
        
        </>
    )
}

export default withRouter(LandingPage);