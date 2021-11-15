import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
function LandingPage(props) {


    
    
    return (
        <>
        <div className="container">
            <section>
                <h1>S.N.A.P.</h1>
                <p>Special Needs Animal Partnership</p>
            </section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Dogs</Card.Title>
                <Card.Text>
                    Special Needs Dogs
                </Card.Text>
                <Button variant="primary">Browse</Button>
                </Card.Body>
            </Card>
            
        </div>
        </>
    )
}

export default withRouter(LandingPage);