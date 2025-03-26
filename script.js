document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    const form = document.getElementById("create-form");
    const recordsList = document.getElementById("records-list");
    let records = JSON.parse(localStorage.getItem("records")) || [];

    if (recordsList) {
        displayRecords();
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            records.push({ name, email });
            localStorage.setItem("records", JSON.stringify(records));
            alert("Record Added!");
            form.reset();
        });
    }

    function displayRecords() {
        recordsList.innerHTML = "";
        records.forEach((record, index) => {
            const row = `<tr>
                            <td>${record.name}</td>
                            <td>${record.email}</td>
                            <td><button onclick="deleteRecord(${index})">Delete</button></td>
                        </tr>`;
            recordsList.innerHTML += row;
        });
    }
});
