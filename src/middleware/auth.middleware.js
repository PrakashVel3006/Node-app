const jwt = require("jsonwebtoken");

require('dotenv').config();

const SECRETKEY = process.env.SECRETKEY;

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]; //Bearer Token

    if (!token) return res.status(401).message({ message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, SECRETKEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Invalid Token" });
    }
}