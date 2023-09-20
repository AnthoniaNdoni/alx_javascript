Cookies & local storage
This README provides a brief overview and usage guide for working with cookies and local storage in JavaScript. Both cookies and local storage are essential tools for storing and managing data in web applications.

Table of Conten
Cookies
Setting Cookies
You can set a cookie in JavaScript using the document.cookie property. Here's an example:

javascript
Copy code
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
In this example, we set a cookie named "username" with the value "John Doe," an expiration date, and a path ("/") indicating that the cookie is accessible from the root of the domain.

Reading Cookies
To read cookies, you can access the document.cookie property. Here's how you can retrieve the value of a specific cookie:
Deleting Cookies
To delete a cookie, you can set its expiration date to a past date. Here's an example:

javascript
Copy code
document.cookie = "username=John Doe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
This code sets the "username" cookie's expiration date to a time in the past, effectively deleting it
Local Storage
Local storage provides a way to store key-value pairs in a web browser.

Setting Data in Local Storage
You can store data in local storage using the localStorage.setItem() method. For example:

javascript
Copy code
localStorage.setItem("userToken", "abc123");
This code stores the user's token with the key "userToken."

Reading Data from Local Storage
To retrieve data from local storage, you can use the localStorage.getItem() method. Here's how you can read the "userToken" value:

javascript
Copy code
const userToken = localStorage.getItem("userToken");
console.log(`User Token: ${userToken}`);
This code retrieves the "userToken" value from local storage.

Removing Data from Local Storage
To remove data from local storage, you can use the localStorage.removeItem() method. For example:

javascript
Copy code
localStorage.removeItem("userToken");
This code removes the "userToken" from local storage.

Remember that both cookies and local storage have their use cases and limitations. Cookies are typically used for smaller data that needs to be sent to the server with each HTTP request, while local storage is suitable for larger amounts of client-side data.

Please refer to the official MDN Web Docs for more detailed information and advanced usage of cookies and local storage in JavaScript.