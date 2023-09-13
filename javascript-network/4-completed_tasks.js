#!/usr/bin/node

const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Send a GET request to the API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
        try {
            const todos = JSON.parse(body);

            // Create a map to count completed tasks for each user
            const completedTasksByUser = new Map();

            // Iterate through the todos
            todos.forEach((todo) => {
                if (todo.completed) {
                    // If the task is completed, increment the count for the user
                    const userId = todo.userId;
                    if (completedTasksByUser.has(userId)) {
                        completedTasksByUser.set(userId, completedTasksByUser.get(userId) + 1);
                    } else {
                        completedTasksByUser.set(userId, 1);
                    }
                }
            });

            // Print the number of completed tasks for each user
            completedTasksByUser.forEach((count, userId) => {
                console.log(`User ${userId}: ${count} completed tasks`);
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});