// In your Express.js server file (e.g., server.js)
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a MongoDB schema and model (using Mongoose)
const dataSchema = new mongoose.Schema({
  // Define your schema fields here
  user_id: String,
  username: String,
  name_of_user: String,
    delivery_package_status: String,
  password: String,
  userEmail: String,
  
  
});
const Data = mongoose.model('Data', dataSchema);

// Define a route to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    // Query MongoDB to fetch data
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
