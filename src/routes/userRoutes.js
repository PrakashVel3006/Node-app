const express = require('express');
const router = express.Router();

router.get('/userList', (req, res) => {
    res.status(200).json({
        message: "Userlist fetched",
        data:
            [
                {
                    "id": 1,
                    "name": "test",
                    "age": 32
                },
                {
                    "id": 2,
                    "name": "usering",
                    "age": 23
                }
            ]
    });
})

module.exports = router;
