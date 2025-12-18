const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.get("/dashboard", (req, res) => {
    res.status(200).json({ message: "Fetched Successfully", data: "Hello Im Prakash from Node Js Server" });
});

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: "Internal server error" })
})

module.exports = app;
