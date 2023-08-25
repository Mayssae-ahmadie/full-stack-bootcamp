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

delayedPromise
    .then(message => {
        alert(message);
        console.log("Chained message!");
    })
    .catch(error => {
        console.error(error);
    });

const networkRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldResolve = Math.random() >= 0.3;
        if (shouldResolve) {
            resolve("Data fetched successfully!");
        } else {
            reject("Network Error!");
        }
    }, 3000);
});

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1%22");
        if (!response.ok) {
            throw new Error(`Fetch, failed, with status ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

networkRequest
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
fetchData


const fetchAndLogPost = async postId => {
    try {
        const response = await fetch(
            ` https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
            throw new Error(`Fetch, failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(`Fetched, post, ${postId}, data, data)`);
    } catch (error) {
        console.error(`Error, fetching, post, ${postId}, data, error.message`);
    }
};

const postIds = [4, 5, 6, 7, 8];

async function fetchPostsSequentially() {
    for (const postId of postIds) {
        await fetchAndLogPost(postId);
    }
}

fetchPostsSequentially();




