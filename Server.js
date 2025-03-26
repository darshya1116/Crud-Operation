const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

let records = [];

app.get("/api/records", (req, res) => {
    res.json(records);
});

app.post("/api/records", (req, res) => {
    const record = req.body;
    records.push(record);
    res.json({ message: "Record added!", record });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
