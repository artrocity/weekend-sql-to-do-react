// Import Modules
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    // Make DB Query
    const dbQuery = 'SELECT * FROM tasks;';
    
    // Manage connections
    pool
        .query(dbQuery)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.err("Error fetching data from tasks database: ", err);
            res.status(500).send("Unable to fetch the data from the task database");
        });    
})

// PUT

// DELETE

module.exports = router;
