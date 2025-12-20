const cors = require('cors');

const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigin = ["http://localhost:5173", "http://localhost:5174"];

        if (!origin || allowedOrigin.includes(origin))
            callback(null, true);
        else
            callback(new Error("Not allowed by CORS"));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeader: ['Content-Type', 'Authorization'],
    credentials: true
}

module.exports = cors(corsOptions);