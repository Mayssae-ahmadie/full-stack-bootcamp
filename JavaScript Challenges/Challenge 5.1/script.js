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