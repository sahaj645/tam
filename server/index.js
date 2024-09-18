const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Database connection
mongoose.connect('mongodb+srv://gravitastam2024:Sahil%40tam123@cluster0.inn1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("DB not connected", err));

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Routes
app.use('/', require('./routes/authroutes'));

// Start server
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
