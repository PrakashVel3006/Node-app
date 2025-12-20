const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        //check user exists
        let existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "User already exists !" });

        //Password Hasing
        const hashedPassword = await bcrypt.hash(password, 10);

        //Save User
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User Registered Sucessfully" });

    } catch (error) {
        console.error("User Registration failed", error.message);
        res.status(500).json({ message: "User Registration failed" });
    }
}

exports.login = async (req, res) => {

    const { username, password } = req.body;

    //Check user exist
    const users = await User.findOne({ username });
    if (!users)
        return res.status(400).json({ message: "Invalid Username" });

    //Check password match
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch)
        return res.status(400).json({ message: "Invalid Password" });

    //Generate JWT
    const token = jwt.sign({ username }, process.env.SECRETKEY, { expiresIn: "1h" })

    return res.status(200).json({ message: "Login Successfull", token: token });
}

//Logout 
exports.logout = async (req, res) => {
    return res.status(200).json({ message: "Logout Successfull" });
}