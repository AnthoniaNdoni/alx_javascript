#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
        // Write the response body to a file with UTF-8 encoding
        fs.writeFile(filePath, body, { encoding: 'utf-8' }, (writeError) => {
            if (writeError) {
                console.error('Error writing to file:', writeError);
            } else {
                console.log(`Web content saved to ${filePath}`);
            }
        });
    }
});