const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/demo');
        console.log("DB Connected!");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

// Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
// Model
const User = mongoose.model('User', userSchema);

server.use(cors());
server.use(bodyParser.json());

// Create
server.post('/demo', async (req, res) => {
    try {
        let user = new User({
            username: req.body.username,
            password: req.body.password
        });
        const doc = await user.save();
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: 'An error occurred while creating user' });
    }
});

// Read all users
server.get('/demo', async (req, res) => {
    try {
        const docs = await User.find({});
        res.json(docs);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

// Update user by ID
server.put('/demo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: 'An error occurred while updating user' });
    }
});

// Delete user by ID
server.delete('/demo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: 'An error occurred while deleting user' });
    }
});

server.listen(8080, () => {
    console.log('Server Started');
});
