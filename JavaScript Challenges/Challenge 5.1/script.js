// Step 1 //
const newButton = document.createElement('button');
newButton.textContent = 'Click Here';
document.body.appendChild(newButton);

newButton.style.padding = '10px 20px';
newButton.style.fontSize = '16px';
newButton.style.backgroundColor = '#3498db';
newButton.style.color = '#ffffff';
newButton.style.border = 'none';
newButton.style.cursor = 'pointer';;

newButton.addEventListener("click", function () {
    newButton.style.backgroundColor = 'red';
    newButton.style.color = 'white';
    newButton.textContent = 'Clicked' + Math.random() * 1000 + 1;
});

// Step 2 //
const newHeading1 = document.createElement('h1');
newHeading1.textContent = 'Hello';
document.body.appendChild(newHeading1);

newHeading1.style.border = '10px dotted green';

// Function to handle keydown events
function handleKeyDown(event) {
    switch (event.key) {
        case 'A':
            newHeading1.style.backgroundColor = 'red';
            break;
        case 'S':
            newHeading1.style.marginLeft = '10px';
            break;
        case 'D':
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Key D was pressed!';
            document.body.appendChild(paragraph);
            break;
        case 'W':
            newHeading1.style.display = newHeading1.style.display === 'none' ? 'block' : 'none';
            break;
        case ' ':
            newHeading1.style.fontSize = '40px';
            break;
    }
}

document.addEventListener('keydown', handleKeyDown);

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Error message container
    const errorMessages = document.getElementById('errorMessages');

    // Validate email using a simple regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern !== email) {
        errorMessages.innerHTML = 'Please enter a valid email address.';
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        errorMessages.innerHTML = 'Password and Confirm Password do not match.';
        return;
    }

    // If all validations pass, show success message
    errorMessages.innerHTML = '';
    const successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = 'Registration successful!';

    // You can now submit the form data to your server here.
});