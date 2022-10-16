const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M@xine007',
    database: 'employeesDB'
});

module.exports = db;