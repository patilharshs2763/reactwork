const { query } = require('express')
const mysql = require('mysql2/promise')

const mysqlConnection = async ({ querys, values = [] }) => {
    let connection = await mysql.createConnection({
        host: "localhost",
        port: '3306',
        user: 'root',
        password: '',
        database: 'employee_test'
    });

    try {
        var data;
        await connection.connect()
            .then(() => connection.query(querys))
            .then(([rows, fields]) => {
                // console.log('The solution is: ', rows);
                data = rows;
            });
        await connection.end();
        return data;
    } catch (error) {
        return { error };
    }

}
module.exports = mysqlConnection;