const express = require('express');
const connection = require('../connection')
var router = express.Router();

//get all the users
router.get('/', async (req, res) => {
    try {

        const querySql = 'SELECT * FROM student';
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: "Successfuly fetched!", rows });
    }
    catch (error) {

    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `SELECT * FROM student WHERE id='${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Featched single data!', rows });
    } catch (error) {
        res.send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const querySql = `INSERT INTO student 
        (id,name,mobile,department,u_id,city) 
        VALUES ('${data.id}','${data.name}','${data.mobile}','${data.department}','${data.u_id}','${data.city}')`;
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: "Successfully created new user!", rows, createdUser: data });

        // console.log('Created User Data:', data); //to display data on console
        // res.send({ message: "Successfully created new user!", rows, createdUser: data });
    } catch (error) {
        res.send({ error })
    }
})

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
            name= '${data.name}',
            mobile= '${data.mobile}',
            department= '${data.department}',
            u_id= '${data.u_id}',
            city= '${data.city}'
        WHERE
            id='${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Updated!', rows, updateUser: data });
    } catch (error) {
        res.send({ message: error })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `DELETE FROM student WHERE id= '${id}'`;
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: 'Successfully Deleted!', rows });
    } catch (error) {
        res.send({ message: error })
    }
})

module.exports = router;