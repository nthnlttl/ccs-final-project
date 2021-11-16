import { Client } from '@petfinder/petfinder-js';

const client = new Client({
    apiKey: env.API_KEY,
    secret: env.API_SECRET
});
export default client;