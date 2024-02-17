const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'a9leg502_damanX',
    password: 'a9leg502_damanX',
    database: 'a9leg502_damanX'
});

export default connection;
