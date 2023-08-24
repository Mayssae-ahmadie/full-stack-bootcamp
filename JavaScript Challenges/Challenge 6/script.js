// Step 1: Introduction to Asynchronous JS
setTimeout(function () {
    console.log("Hello after 5 seconds!");
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let helloMessage = document.createElement("p");
        helloMessage.textContent = "Hello after 5 seconds!";
        document.body.appendChild(helloMessage)
    }, 5000);
});

let clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var clockTime = hours + ":" + minutes + ":" + seconds;
    clockDiv.textContent = clockTime;
}

updateClock();
setInterval(updateClock, 1000);

const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});

delayedPromise.then((message) => {
    console.log(message);
})

delayedPromise
    .then((message) => {
        alert(message);

        return 'Chained message!';
    })
    .then((chainedMessage) => {
        console.log(chainedMessage);
    })
    .catch((error) => {
        console.error(error);
    });



