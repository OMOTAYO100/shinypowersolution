const mongoose = require('mongoose');
require('dotenv').config();

console.log("Attempting to connect to:", process.env.MONGODB_URI.replace(/:([^@]+)@/, ":****@"));

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000, // Shorter timeout for faster debugging
})
.then(() => {
    console.log("✅ Successfully connected to MongoDB!");
    process.exit(0);
})
.catch(err => {
    console.error("❌ Connection failed!");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    if (err.reason) {
        console.error("Reason:", JSON.stringify(err.reason, null, 2));
    }
    process.exit(1);
});
