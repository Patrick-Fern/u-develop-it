const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '198small',
        database: 'election'
    },
    console.log('Connection to the election database.')
);

module.exports = db;