const express = require('express');
const connection = require('../connection');

var router = express.Router();


// Fetch all students
router.get('/', async (req, res) => {
    try {
        const querySql = 'SELECT * FROM student';
        const rows = await connection({ querys: querySql, values: [] });
        res.status(200).json({ message: "Successfully fetched all students!", rows });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch students", details: error });
    }
});

// Fetch a single student by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `SELECT * FROM student WHERE id='${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });

        if (rows.length > 0) {
            res.status(200).json({ message: 'Successfully fetched single data!', rows });
        } else {
            res.status(404).json({ message: `User with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user", details: error });
    }
});

// Create a new student
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const querySql = `INSERT INTO student 
        (first_name,last_name,email,password,mobile) 
        VALUES ('${data.first_name}','${data.last_name}','${data.email}','${data.password}','${data.mobile}')`;
        const rows = await connection({ querys: querySql, values: [] });

        res.status(201).json({ message: "Successfully created new user!", rows });
    } catch (error) {
        res.status(500).json({ error: "Failed to create user", details: error });
    }
});

//Update data of a perticular id
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Step 1: Validate if the user with the given ID exists
        const checkUserQuery = `SELECT * FROM student WHERE id = ?`;
        const existingUser = await connection({ querys: checkUserQuery, values: [id] });

        if (existingUser.length === 0) {
            // If user does not exist, return a 404 error
            return res.status(404).send({ message: `User with ID ${id} not found` });
        }

        //Update data
        const querySql = `UPDATE student
        SET
            first_name= '${data.first_name}',
            last_name= '${data.last_name}',
            email= '${data.email}',
            password= '${data.password}',
            mobile= '${data.mobile}'
        WHERE
            id='${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.status(200).json({ message: 'Successfully updated!', rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error });
    }
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `DELETE FROM student WHERE id= '${id}'`;
        const rows = await connection({ querys: querySql, values: [] });
        res.status(200).json({ message: 'Successfully deleted!', rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error });
    }
});

module.exports = router;