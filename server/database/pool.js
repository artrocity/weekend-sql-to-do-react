// Import Modules
const pg = require('pg');

// config my DB connection
const pool = new pg.Pool({
    // Database Name
    database: 'weekend-to-do-app',
    // Postico Host Settings
    host: 'localhost',
    // Postico Port Number
    port: '5432',
});

// Export the pool variable
module.exports = pool;