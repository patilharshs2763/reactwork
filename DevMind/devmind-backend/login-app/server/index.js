const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./connection');
const usersRoutes = require('./routes/User')
const loginRoute = require('./routes/login');
var middleware = require('./middleware');
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}));

app.use('/users', middleware, usersRoutes);
app.use('/login', loginRoute);

app.get("/", async (req, res) => {
    try {
        res.send("Hello Register/Login portal!");
    } catch (error) {
        res.send({ error });
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
