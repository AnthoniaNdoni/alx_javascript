#!/usr/bin/node

const request = require('request');

const url = process.argv[2]; // Retrieve the URL from the command line arguments

request.get(url, (error, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});