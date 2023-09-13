const request = require('request');

// Define the base URL of the Star Wars API
const baseUrl = 'https://swapi-api.alx-tools.com';

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL for the movie details
const movieUrl = `${baseUrl}/api/films/${movieId}`;

// Send a GET request to retrieve movie details
request.get(movieUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
        try {
            const movie = JSON.parse(body);
            console.log(`Characters in "${movie.title}":`);

            // Iterate through the characters and print their names
            movie.characters.forEach((characterUrl) => {
                request.get(characterUrl, (charError, charResponse, charBody) => {
                    if (!charError && charResponse.statusCode === 200) {
                        const character = JSON.parse(charBody);
                        console.log(character.name);
                    }
                });
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});