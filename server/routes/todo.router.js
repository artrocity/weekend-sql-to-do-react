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
});

// POST
router.post('/', (req, res) => {
    // Obtain the req body
    const { task_name, due_date, priority, task_group } = req.body;

    // Make DB Query
    const dbQuery = `INSERT INTO tasks (task_name, due_date, priority, task_group)
    VALUES($1, $2, $3, $4);`;
    
    // Manage connections
    pool
        .query(dbQuery, [task_name, due_date, priority, task_group, taskID])
        .then((result) => {
            res.status(201).send("New Task was added to the database.");
        })
        .catch((err) => {
            console.err("Error adding the task to the database: ", err);
            res.status(400).send("Unable add the task to the database.");
        });    
});

module.exports = router;
