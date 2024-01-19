import React, { useState } from 'react';
import './TaskForm.css';
import { addTask, fetchTasks } from '../../Service/apiService';

function TaskForm() {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [taskGroup, setTaskGroup] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    // Add logic to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        taskName ? addNewTask() : alert("Please add a task name!")
    };

    // Axios call to add new task
    const addNewTask = () => {
        let newTask = {
            task_name: taskName, 
            due_date: dueDate, 
            priority: priority, 
            task_group: taskGroup, 
            description: taskDescription
        };

        addTask(newTask)
            .then(() => {
                fetchTasks()
                alert("Task Added Sucessfully")
                
                setTaskName("");
                setDueDate("");
                setPriority("");
                setTaskGroup("");
                setTaskDescription("");
            })
            .catch((error) => {
                console.error("Error adding a new task via POST: ", error);
            });
    }

    // Text Area Max Characters - Coincides with VARCHAR on DB
    const maxChars = 200;

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Add a Task</h1>
                <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">Task Name</label>
                    <input 
                        type="text" 
                        className="form-control shadow-div" 
                        id="taskName" 
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDueDate" className="form-label">Task Due Date</label>
                    <input 
                        type="date" 
                        className="form-control shadow-div" 
                        id="taskDueDate" 
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskPriority" className="form-label">Task Priority</label>
                    <select 
                        className="form-control shadow-div" 
                        id="taskPriority" 
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="">Choose a Priority Level</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="taskGroup" className="form-label">Task Group</label>
                    <input 
                        type="text" 
                        className="form-control shadow-div" 
                        id="taskGroup" 
                        value={taskGroup}
                        onChange={(e) => setTaskGroup(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Task Description</label>
                    <textarea
                        id="taskDescription"
                        className="form-control shadow-div"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        rows="4" 
                        placeholder="Enter text here..."
                        maxLength={maxChars}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;