//Step 1//
// Create the container div
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

// Create the login__container div
const loginContainerDiv = document.createElement('div');
loginContainerDiv.classList.add('login__container');

// Create the login__signin div
const loginSigninDiv = document.createElement('div');
loginSigninDiv.classList.add('login__signin');

// Create the login__signin-now div
const loginSigninNowDiv = document.createElement('div');
loginSigninNowDiv.classList.add('login__signin-now');

// Create the h1 element for "Sign up NOW!"
const h1Element = document.createElement('h1');
h1Element.textContent = 'Sign up NOW!';

// Create the h3 element for "Enter your details"
const h3Element = document.createElement('h3');
h3Element.textContent = 'Enter your details';

// Create the form element
const formElement = document.createElement('form');

// Create the label and input elements for Email
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.classList.add('input-field');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailLabel.appendChild(emailInput);

// Create the label and input elements for Password
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.classList.add('input-field');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);

// Create the label and input elements for Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password';
const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.classList.add('input-field');
confirmPasswordInput.type = 'cpassword';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.required = true;
confirmPasswordLabel.appendChild(confirmPasswordInput);

// Create the button element
const submitButton = document.createElement('button');
submitButton.classList.add('filled-btn');
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';

// Append all elements in the correct hierarchy
loginSigninNowDiv.appendChild(h1Element);
loginSigninNowDiv.appendChild(h3Element);
formElement.appendChild(emailLabel);
formElement.appendChild(passwordLabel);
formElement.appendChild(confirmPasswordLabel);
formElement.appendChild(submitButton);
loginSigninNowDiv.appendChild(formElement);
loginSigninDiv.appendChild(loginSigninNowDiv);
loginContainerDiv.appendChild(loginSigninDiv);
containerDiv.appendChild(loginContainerDiv);
document.body.appendChild(containerDiv);


//Step 1.1
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from password and confirm password inputs
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    // Create the error message element
    let errorMessage = document.getElementById('errorMessage');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'errorMessage';
        errorMessage.style.color = 'red';
        confirmPasswordLabel.appendChild(errorMessage);
    }

    // Check if the passwords match or not 
    if (passwordValue === confirmPasswordValue) {
        // Redirect to the quotes page
        window.location.href = 'quotes.html';
    } else {
        // Display an error message
        errorMessage.textContent = 'Passwords do not match. Please try again.';
    }
}

// Add a click event listener to the submit button
submitButton.addEventListener('click', handleSubmit);