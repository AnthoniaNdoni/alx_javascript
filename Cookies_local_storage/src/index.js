function setCookies() {
    const firstnameValue = document.getElementById('firstname').Value;
    const emailValue = document.getElementById('email').Value

    // Set cookies for firstname and email
    document.cookie = 'fristname=${fristnameValue}';
    document.cookie = 'email=${emailValue}';
}

function showCookies() {
    const cookieContainer = document.getElementById('cookieContainer');
    cookieContainer.innerHTML = ''; // Clear previous content

    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'Cookies: ${name}=${value}';
        cookieContainer.appendChild(paragraph);
    }
}