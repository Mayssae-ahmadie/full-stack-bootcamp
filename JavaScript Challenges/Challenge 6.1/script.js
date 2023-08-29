function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

delay(2000)
    .then(() => {
        console.log("Delay");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


// Step 2 
fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(postData => {
        console.log(postData);
    })
    .catch(error => {
        console.error(`Error fetching post ${post}:`, error);
    });
