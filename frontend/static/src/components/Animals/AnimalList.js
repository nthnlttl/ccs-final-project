import React from 'react';
import { withRouter } from 'react-router';

const CLIENT_ID = 'olPcPLfd3NAbex1eaVlxEUNh8sNLouNFg4APT8bPBMIzeK9MUI'
const CLIENT_SECRET = 'olPcPLfd3NAbex1eaVlxEUNh8sNLouNFg4APT8bPBMIzeK9MUI'

function AnimalList(props) {

    const fetchData = async () => {
        const url = `https://api.petfinder.com/v2/oauth2/token?client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}`

        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application.json',
            }
        }
    
        const response = await fetch(url, options);
        console.log(response)
        // const data = response.json();
        // console.log(data);

    }

    fetchData();
  
    return (
        <div>
            <h1>Animals in need of a Special Friend!</h1>
        </div>
    )
}

export default withRouter(AnimalList);