const express = require('express');
const router = express.Router();
const connectToMongo = require('../connection');
const ObjectId = require('mongodb').ObjectId;

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const { db, client } = await connectToMongo();
        const collection = db.collection('students');  // Assuming the collection name is 'students'
        const students = await collection.find().toArray();
        res.status(200).json({
            message: 'Successfully fetched!',
            students: students,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Add a new user
router.post('/', async (req, res) => {
    const { name, mobile, department, city } = req.body;
    try {
        const { db, client } = await connectToMongo();
        const collection = db.collection('students');
        const newUser = { name, mobile, department, city };
        await collection.insertOne(newUser);
        res.status(200).json({ message: 'User added successfully!' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { db, client } = await connectToMongo();
        const collection = db.collection('students');
        await collection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

module.exports = router;
