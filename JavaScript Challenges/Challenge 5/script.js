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




