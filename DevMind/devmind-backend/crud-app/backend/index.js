const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

app.post('/createusers', async (req, res) => {
    try {
        const data = req.body;
        const querySql = `INSERT INTO employee_data ( eid, ename, emobile,esalary,eaddress) VALUES ( '${data.eid}', '${data.ename}', '${data.emobile}','${data.esalary}','${data.eaddress}')`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Created!', rows });
    } catch (error) {
        res.send({ error });
    }
})
app.get('/getusers', async (req, res) => {
    try {
        const querySql = 'SELECT * FROM employee_data';
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Featched!', rows });
    } catch (error) {
        res.send(error);
    }

})
app.get('/getuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `SELECT * FROM employee_data WHERE id='${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Featched single data!', rows });
    } catch (error) {
        res.send(error);
    }
})
app.patch('/updateuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const querySql = `UPDATE employee_data 
        SET 
            ename = '${data.ename}', 
            emobile = '${data.emobile}', 
            esalary = '${data.esalary}', 
            eaddress = '${data.eaddress}' 
        WHERE 
          id = '${id}'`;
        const rows = await connection({ querys: querySql, valaues: [] });
        res.send({ message: 'Successfully Updated!', rows });

    } catch (error) {
        res.send(error);
    }
})

app.delete('/deleteuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const querySql = `DELETE FROM employee_data WHERE id = '${id}'`;
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: 'Successfully Deleted!', rows });
    } catch (error) {
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})