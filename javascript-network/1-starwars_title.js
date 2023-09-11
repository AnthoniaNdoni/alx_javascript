#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the API endpoint URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
        try {
            const movieData = JSON.parse(body);
            console.log(`Title of Episode ${movieData.episode_id}: ${movieData.title}`);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});