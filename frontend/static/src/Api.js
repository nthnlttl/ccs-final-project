import { Client } from '@petfinder/petfinder-js';

const client = new Client({
    apiKey: process.env.API_KEY, 
    secret: env.API_SECRET
});
export default client;

// import { Client } from "@petfinder/petfinder-js";

// const client = new Client({
//   apiKey: "my-api-key",
//   secret: "my-api-secret",
//   token: "my-access-token",
// });
