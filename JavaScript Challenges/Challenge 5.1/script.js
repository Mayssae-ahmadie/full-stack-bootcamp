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