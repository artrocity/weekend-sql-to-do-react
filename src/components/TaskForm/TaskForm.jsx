import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm() {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [taskGroup, setTaskGroup] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
    };

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
                        className="form-control" 
                        id="taskName" 
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDueDate" className="form-label">Task Due Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="taskDueDate" 
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskPriority" className="form-label">Task Priority</label>
                    <select 
                        className="form-control" 
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
                        className="form-control" 
                        id="taskGroup" 
                        value={taskGroup}
                        onChange={(e) => setTaskGroup(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Task Description</label>
                    <textarea
                        id="taskDescription"
                        className="form-control"
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