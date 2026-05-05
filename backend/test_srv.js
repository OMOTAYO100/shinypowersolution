const mongoose = require('mongoose');
require('dotenv').config();

const uri = "mongodb+srv://solaradmin:Oluwadamilare95@cluster0.tbc1buj.mongodb.net/solarstore?appName=Cluster0";
console.log("Attempting to connect with SRV...");

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
    console.log("✅ SRV Connection Successful!");
    process.exit(0);
})
.catch(err => {
    console.error("❌ SRV Connection failed!");
    console.error(err.message);
    process.exit(1);
});
