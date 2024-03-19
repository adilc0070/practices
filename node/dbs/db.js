const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/mydb";

// Use async/await for better readability and error handling
async function connectToDatabase() {
    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Connect to the MongoDB server
        await client.connect();

        console.log("Connected to the database!");

        // Close the connection when done
        client.close();
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}

// Call the function to connect
connectToDatabase();
