#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Send a GET request to the API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
        try {
            const filmsData = JSON.parse(body).results;
            const moviesWithWedgeAntilles = filmsData.filter((film) =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );
            console.log(moviesWithWedgeAntilles.length); // Print only the number of movies
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});