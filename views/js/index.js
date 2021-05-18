//example API request


/* Good GET Request */
(async () => {
    try {
        let response = await fetch('/api/hello');
        let data = await response.json();
        console.log(data);
    }
    catch(e) {
        console.error(e);
    }
})();

/* Bad POST Request */
(async () => {
    try {
        await fetch('/api/fail', { method: "POST" });
    }
    catch(e) {
        console.error(e);
    }
})();