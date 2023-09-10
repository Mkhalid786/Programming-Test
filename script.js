document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    let jsonData;

    // Fetch JSON data using AJAX
    function fetchJSONData() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                jsonData = JSON.parse(xhr.responseText);
                displayPerson(currentIndex);
            }
        };
        xhr.open("GET", "./data.json", true);
        xhr.send();
    }

    // Function to display person info
    function displayPerson(index) {
        const person = jsonData[index];
        if (person) {
            document.getElementById("name").textContent = person.name;
            document.getElementById("number").textContent = person.number;
            document.getElementById("location").textContent = person.location;
        } else {
            alert("No more people!");
        }
    }

    // Load JSON data on page load
    fetchJSONData();

    // Next Person button click event
    document.getElementById("next-person").addEventListener("click", function () {
        currentIndex++;
        displayPerson(currentIndex);
    });
});
