const mongoose = require("mongoose");

// Connects to MongoDB using mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDb connection failed: ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;