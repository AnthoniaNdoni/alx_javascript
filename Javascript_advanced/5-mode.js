/**
 * Changes the style of the entire page.
 * @param {number} size - Font size.
 * @param {string} weight - Font weight.
 * @param {string} transform - Text transform.
 * @param {string} background - Background color.
 * @param {string} color - Text color.
 */

// Function to change page style
function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// Function to set up the page
function main() {
    // set background color properties
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
          
    // Create paragraph element and add it to the page
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'welcome Holberton!';
    document.body.appendChild(welcomeMessage);

    const spookyButton = document.createElement('Button');
    spookyButton.textContent = 'Spooky';
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('Button');
    darkModeButton.textContent = 'Dark mode';
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('Button');
    screamModeButton.textContent = 'Scream mode';
    document.body.appendChild(screamModeButton);

    // Add click events to the buttons
    spookyButton.addEventListener('click', ()=>{
        spooky();
    });

    darkModeButton.addEventListener('click', ()=>{
        darkMode();
    });

    screamModeButton.addEventListener('click', ()=>{
        screamMode();
    });
}
// Call the main function to set up the page
main ();