-- How the database is configured

-- Columns
-- Task, Due Date, Priority, Task Group
CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task_name VARCHAR(80) NOT NULL,
	due_date DATE NOT NULL,
	priority VARCHAR(10) NOT NULL,
	task_group VARCHAR(20)
);

-- Queries used FOR CRUD

-- Create
INSERT INTO tasks (task_name, due_date, priority, task_group)
    VALUES($1, $2, $3, $4);

-- Read
SELECT * FROM tasks;

-- Update
UPDATE tasks
        SET task_name = $1, due_date = $2, priority = $3, task_group = $4
        WHERE id = $5;

-- Delete
DELETE FROM tasks WHERE id = $1;

-- All SQL ENTRIES WITH REVISIONS
CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task_name VARCHAR(80) NOT NULL,
	due_date DATE NOT NULL,
	priority VARCHAR(10) NOT NULL,
	task_group VARCHAR(20)
);

SELECT * FROM tasks;

INSERT INTO tasks (task_name, due_date, priority, task_group)
VALUES('Mow the yard', '2024-02-01', 'Low', 'Household');

SELECT * FROM tasks;

UPDATE tasks
SET priority = 'high'
WHERE id  = 1;

SELECT * FROM tasks;

ALTER TABLE tasks
ADD COLUMN description VARCHAR(200);

INSERT INTO tasks (task_name, due_date, priority, task_group, description)
VALUES('Change the oil', '2024-02-01', 'Medium', 'Vehicle', 'WD-40'),
('Iron the clothes', '2024-02-01', 'low', 'Household', 'With HOT IRON'),
('Go to the Gym', '2024-02-01', 'Medium', 'Vehicle', 'Work on finger strength'),
('Burn the excess leaves', '2024-02-01', 'High', 'Yard', 'The orange ones');