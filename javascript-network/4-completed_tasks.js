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

            // Create an object to store completed task counts for each user
            const completedTasksByUser = {};

            // Iterate through the todos
            todos.forEach((todo) => {
                if (todo.completed) {
                    // If the task is completed, increment the count for the user
                    const userId = todo.userId;
                    if (completedTasksByUser[userId]) {
                        completedTasksByUser[userId]++;
                    } else {
                        completedTasksByUser[userId] = 1;
                    }
                }
            });

            // Print the users with completed tasks
            for (const userId in completedTasksByUser) {
                console.log(`User ${userId}: ${completedTasksByUser[userId]} completed tasks`);
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});