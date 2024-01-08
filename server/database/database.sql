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