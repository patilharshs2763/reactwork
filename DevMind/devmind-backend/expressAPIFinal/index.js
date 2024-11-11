const express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors')
const connection = require("./connection");
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send('Hello World! on line 6')
})

app.post('/user', async (req, res) => {
    try {
        const data = req.body;
        const querySql = `INSERT INTO student_table ( Name, Rollnumber, City) VALUES ( '${data.name}', '${data.rollnumber}', '${data.city}')`;
        const rows = await connection({ querys: querySql, values: [] });
        res.send({ message: "created", rows })
        // res.send({ message: "newly created", querySql })
    }
    catch (error) {
        res.send({ error });
    }
})

app.get('/user', async (req, res) => {
    const querySql = 'SELECT * FROM student_table';
    const rows = await connection({ querys: querySql, values: [] });
    // console.log(rows);
    res.send({ message: "success", rows })
})

app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const querySql = `DELETE FROM student_table where id='20'`;
    const rows = await connection({ querys: querySql, values: [] });
    res.send({ message: "Deleted succefully!", rows });
})
// app.patch('/user/:id', async (req, res) => {
//     const id = req.params.id;
//     const update = req.body;
//     const querySql = `UPDATE student_table SET '${update.name = "KK"}','${update.rollnumber = "43"}','${update.city = "Bambavade"}' where id='21'`;
//     const rows = await connection({ querys: querySql, values: [] });
//     res.send({ message: "Update succefully!" });
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})