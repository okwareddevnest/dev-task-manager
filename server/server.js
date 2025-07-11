require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

const allowedOrigins = [
    'http://localhost:5173',                    //Local dev
    'https://dev-task-manager-sigma.vercel.app' //Production
];

app.use(
    cors({
        origin: (origin, cb) => {
            // Allow Postman/curl which send no origin
            if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
        },
        credentials: true,
        methods: 'GET, POST, PUT, DELETE',
        allowedHeaders: 'content-Type, Authorization',
    }));
app.use(express.json());



app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serve running on http://localhost:${PORT}`));