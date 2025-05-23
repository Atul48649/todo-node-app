const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://atul48649:12345@todo-node-app.a0u0hwe.mongodb.net/?retryWrites=true&w=majority&appName=todo-node-app", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Atlas connected");
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("MongoDB connection error", err);
});
