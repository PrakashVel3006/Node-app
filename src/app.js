const express = require('express');
const authRoutes = require("./routes/auth.routes");
const authMiddleware = require('./middleware/auth.middleware')
const userRoutes = require('./routes/userRoutes');
const corsOptions = require('./config/cors')

const app = express();

app.use(corsOptions);

app.use(express.json());

app.get("/dashboard", (req, res) => {
    res.status(200).json({ message: "Fetched Successfully", data: "Hello Im Prakash from Node Js Server" });
});

app.use("/api", userRoutes);

//Auth Routes
app.use("/api/auth", authRoutes);

//Protected Routes 
app.use("/api/protected", authMiddleware, (req, res) => {
    res.json({ message: "Proteced routes" })
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" })
})

module.exports = app;
