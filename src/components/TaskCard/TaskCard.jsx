// Import Modules
import React, { useState } from 'react';
import './TaskCard.css';
import { format, parseISO } from 'date-fns';

// Function to display tasks on a task card
function TaskCard({ task }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    // Format the Date Of Each Task
    const formattedDate = task.due_date ? format(parseISO(task.due_date), 'MMMM d, yyyy') : 'No date available for this task';

    // Logic for the radio button to make a put request to mark as complete

    return (
        <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <input 
                        type="radio" 
                        className="mark-complete-checkbox me-2" 
                        checked={task.completed} 
                        onChange={() => {/* handle task completion logic */}} 
                    />
                    <h4 className="card-title mb-0">{task.task_name}</h4>
                </div>
                <button onClick={toggleExpanded} className="btn btn-primary">
                    {expanded ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {expanded && (
                <div className="card-body">
                    {/* Card Details */}
                    <div className="task-info-container">
                        <h5>Due Date</h5>
                        <p className="card-text">{formattedDate}</p>
                    </div>
                    <hr />
                    <div className="task-info-container">
                        <h5>Priority Level</h5>
                        <p className="card-text">{task.priority}</p>
                    </div>
                    <hr />
                    <div className="task-info-container"> 
                        <h5>Task Group</h5>
                        <p className="card-text">{task.task_group}</p>
                    </div>
                    <hr />
                    <div className="task-info-container">
                        <h5>Description</h5>
                        <p className="card-text">{task.description}</p>
                    </div>
                    <hr />
                    {/* Card Buttons */}
                    <div className="card-buttons">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskCard;
