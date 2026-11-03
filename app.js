const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to DevOpsify</h1>
        <p>DevOps Status Dashboard</p>
        <p>Application Status: Healthy</p>
        <p>Version: 1.0.0</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`DevOpsify is running on port ${PORT}`);
});