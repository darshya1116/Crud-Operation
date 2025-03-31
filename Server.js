const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use Render's assigned port

app.use(express.static("public"));
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
    res.send("Server is running on Render!");
});

let records = [];

app.get("/api/records", (req, res) => {
    res.json(records);
});

app.post("/api/records", (req, res) => {
    const record = req.body;
    records.push(record);
    res.json({ message: "Record added!", record });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
