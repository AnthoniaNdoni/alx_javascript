#!/usr/bin/node
const request = require("request");

const req = require('request');  

const url ='https://swapi.dev/api/people/1';
 

request.get(url, function (error, response, body) {
    console.log('status code: ', response.statusCode);
   });