// Import Modules
const pg = require('pg');

// config my DB connection
const pool = new pg.Pool({
    // Database Name
    database: 'to_do_db',
    // Postico Host Settings
    host: 'localhost',
    // Postico Port Number
    port: '5432',
});

// Export the pool variable
module.exports = pool;