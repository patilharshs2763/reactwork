const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection')
const userRoutes = require('./routes/User')
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/users', userRoutes);

// Default route to check the server
app.get("/", async (req, res) => {
    try {
        res.send("Hello Harshvardhan!");
    } catch (error) {
        res.send({ error });
    }
})

//get all the users
// app.get('/getuser', async (req, res) => {
//     try {

//         const querySql = 'SELECT * FROM student';
//         const rows = await connection({ querys: querySql, values: [] });
//         res.send({ message: "Successfuly fetched!", rows });
//     }
//     catch (error) {

//     }
// })
//get user by perticular id
// app.get('/getuser/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const querySql = `SELECT * FROM student WHERE id='${id}'`;
//         const rows = await connection({ querys: querySql, valaues: [] });
//         res.send({ message: 'Successfully Featched single data!', rows });
//     } catch (error) {
//         res.send(error);
//     }
// })

//add data or user to perticular db table
// app.post('/createuser', async (req, res) => {
//     try {
//         const data = req.body;
//         const querySql = `INSERT INTO student 
//         (id,name,mobile,department,u_id,city) 
//         VALUES ('${data.id}','${data.name}','${data.mobile}','${data.department}','${data.u_id}','${data.city}')`;
//         const rows = await connection({ querys: querySql, values: [] });
//         res.send({ message: "Successfully created new user!", rows, createdUser: data });

//         // console.log('Created User Data:', data); //to display data on console
//         // res.send({ message: "Successfully created new user!", rows, createdUser: data });
//     } catch (error) {
//         res.send({ error })
//     }
// })

//Update data of a perticular id
app.patch('/updateuser/:id', async (req, res) => {
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

app.delete('/deleteuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `DELETE FROM student WHERE id= '${id}'`;
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: 'Successfully Deleted!', rows });
    } catch (error) {
        res.send({ message: error })
    }
})

// app.patch('/updateuser/:id', async (req, res) => {
//     try {
//         const { id } = req.params;  // Extract user ID from URL params
//         const data = req.body;      // Get the updated user data from the request body

//         // Step 1: Fetch the current data of the user before updating
//         const fetchQuery = `SELECT * FROM student WHERE id='${id}'`;
//         const existingUser = await connection({ querys: fetchQuery, values: [] });

//         if (existingUser.length === 0) {
//             return res.status(404).send({ message: `User with ID ${id} not found` });
//         }

//         // Step 2: Update the user data
//         const updateQuery = `UPDATE student
//         SET
//             name= '${data.name}',
//             mobile= '${data.mobile}',
//             department= '${data.department}',
//             u_id= '${data.u_id}',
//             city= '${data.city}'
//         WHERE id='${id}'`;
//         const rows = await connection({ querys: updateQuery, values: [] });

//         // Step 3: Send response with both old and new data
//         res.send({
//             message: 'Successfully updated!',
//             oldUser: existingUser[0],  // Send the old user data before the update
//             updatedUser: data,         // Send the new user data
//             rows
//         });
//     } catch (error) {
//         res.status(500).send({ message: 'Error updating user', error });
//     }
// });

// app.delete('/deleteuser/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Step 1: Fetch the user data before deleting
//         const fetchQuery = `SELECT * FROM student WHERE id='${id}'`;
//         const existingUser = await connection({ querys: fetchQuery, values: [] });

//         if (existingUser.length === 0) {
//             return res.status(404).send({ message: `User with ID ${id} not found` });
//         }

//         // Step 2: Delete the user
//         const deleteQuery = `DELETE FROM student WHERE id='${id}'`;
//         const rows = await connection({ querys: deleteQuery, values: [] });

//         // Step 3: Send response with the deleted user data
//         res.send({
//             message: 'Successfully deleted!',
//             deletedUser: existingUser[0],  // Return the data of the deleted user
//             rows
//         });
//     } catch (error) {
//         res.status(500).send({ message: 'Error deleting user', error });
//     }
// });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})