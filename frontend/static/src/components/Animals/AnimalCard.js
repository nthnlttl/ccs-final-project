import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AnimalCard.css'

export default function AnimalCard(props) {
    return (
        <>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title>Special Needs Cats</Card.Title>
                <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
                </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Special Needs Dogs</Card.Title>
            <Card.Text>
  Some quick example text to build on the card title and make up the bulk of
  the card's content.
            </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    </>
        
    )
}


