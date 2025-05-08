// Use the Fetch API to get data from the Flask backend
fetch('http://127.0.0.1:5000/api/data')
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        console.log(data.message);  // Display the message in the console
        document.getElementById('output').innerText = data.message;  // Show it on the webpage
    })
    .catch(error => console.error('Error:', error));
