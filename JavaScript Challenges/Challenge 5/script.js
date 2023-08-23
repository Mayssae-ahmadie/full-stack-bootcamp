// Step 1 //
//  DOM Tree Navigation //
const menuDiv = document.querySelector('.menu');
console.log('Menu Div Child Elements:', menuDiv.children);

const headerElement = document.querySelector('header');
console.log('Header Child Elements:', headerElement.children);

const footerElement = document.querySelector('footer');
console.log('Footer Child Elements:', footerElement.children);

// DOM Element Creation //
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Hello, World!';
containerDiv.appendChild(paragraphElement);
document.body.appendChild(containerDiv);

// Element Styling using JavaScript //
containerDiv.style.backgroundColor = 'blue';
paragraphElement.style.color = 'white';
paragraphElement.style.fontSize = '24px';
paragraphElement.style.fontFamily = 'Helvetica, sans-serif';
paragraphElement.style.border = '1px solid black';

const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
for (const headingElement of headingElements) {
    headingElement.style.fontStyle = 'italic';
}

// Step 2 //
// Multiple Event Listeners //
const newButton = document.createElement('button');
newButton.classList.add('button');
const paragraphButton = document.createElement('p');
paragraphButton.textContent = 'Click here';
newButton.appendChild(paragraphButton);
document.body.appendChild(newButton);

newButton.style.backgroundColor = 'red';
paragraphButton.style.color = 'white';

newButton.addEventListener("mouseover", function () {
    newButton.style.backgroundColor = 'blue';
});
newButton.addEventListener("mouseout", function () {
    newButton.style.backgroundColor = 'red';
});

// Event Delegation //
let buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', function (event) {
    let clickedElement = event.target;
    if (clickedElement.tagName === 'BUTTON') {
        console.log('Clicked button text:', clickedElement.textContent);
    }
});

// Form Data Extraction //
// Create a form element
let formElement = document.createElement('form');

// Create input element for Name
let nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameLabel.appendChild(nameInput);

// Create input element for Email
let emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailLabel.appendChild(emailInput);

// Create submit button
let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

// Append elements to the form
formElement.appendChild(nameLabel);
formElement.appendChild(document.createElement('br'));
formElement.appendChild(emailLabel);
formElement.appendChild(document.createElement('br'));
formElement.appendChild(submitButton);

formElement.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Log the data entered by the user
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
});

// Append the form element to the body
document.body.appendChild(formElement);

// Step 3 //
// DOM Cloning //
const originalDiv = document.getElementById('original');
const cloneButton = document.getElementById('clone-btn');

const clonedDiv = originalDiv.cloneNode(true);
const originalH1 = document.querySelector('h1');
originalH1.textContent = 'Cloned';
document.body.appendChild(clonedDiv);

function toggleClonedDiv() {
    if (clonedDiv.style.display === 'none') {
        clonedDiv.style.display = 'block';
    } else {
        clonedDiv.style.display = 'none';
    }
}

cloneButton.addEventListener('click', toggleClonedDiv);

// Element Removal //

const removeHeaderButton = document.createElement('removeheader');
removeHeaderButton.classList.add('removeheader');
const paragraphHeader = document.createElement('p');
paragraphHeader.textContent = 'Remove Header';
removeHeaderButton.appendChild(paragraphHeader);
document.body.appendChild(removeHeaderButton);

removeHeaderButton.style.backgroundColor = 'bleu';
paragraphHeader.style.color = 'white';

function removeHeader() {
    header.remove();
}

removeHeaderButton.addEventListener('click', removeHeader);
