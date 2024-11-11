const express = require('express');
const jwt = require("jsonwebtoken");
const connection = require('../connection');
var secretKey = "login-application";
var router = express.Router();


router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            const querySql = `SELECT * FROM student WHERE email='${email}' AND password='${password}'`;
            const rows = await connection({ querys: querySql, valaues: [] });
            // console.log(rows);
            // res.send({ message: 'Successfully Featched single data!', rows });
            if (rows && rows.length > 0) {
                jwt.sign(rows[0], secretKey, { expiresIn: '365d' }, (err, token) => {
                    res.status(200).send({ token });
                })
            } else {
                res.status(401).send({ message: 'Invalid email or password!' });
            }

        } else {
            res.status(400).send({ message: 'Invalid data!' });
        }

    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error });
    }
})

module.exports = router;
