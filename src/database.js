import mysqlConnection from 'mysql2/promise.js';

const properties = {
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'rest-api-biblio'
};

export const pool = mysqlConnection.createPool(properties);