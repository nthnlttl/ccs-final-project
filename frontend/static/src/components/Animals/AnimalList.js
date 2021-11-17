import { React, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';



function AnimalList(props) {
    const [ animal, setAnimalList] = useState([]);

    useEffect(() =>  {
        let url = '/api_v1/animals/';
    
    async function getAnimalList() {
        const response = await fetch(url);
        const data = await response.json();

        setAnimalList(data);
    }
getAnimalList();
}, []);


  
const AnimalListHTML = animal.map(animal =>
    <Card sx={{ maxWidth: 345 }} key={animal.id}>
      <CardMedia
        component="img"
        height="140"
        image={animal.image}
        alt="PET"
        className={animal.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {animal.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {animal.breed}
          {animal.size}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
    // <div key={animal.id} className='Animal'>
    //     <img className='fit-picture' src={animal.image} alt='' />
    //     <h3>{animal.name}</h3>
    //     <p>{animal.size}</p>
    // </div>
);
    

    
  
    return (
        <>
        <Grid container justifyContent='space-evenly' columns={4} rows={4}>
        {AnimalListHTML}
        </Grid>
        
        </>
    )
    }  

export default withRouter(AnimalList);