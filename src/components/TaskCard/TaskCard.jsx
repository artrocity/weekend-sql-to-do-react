// Import Modules
import React from 'react';

// Function to display tasks on a task card
function TaskCard({ task }) {

    return (
        <div className="card">
        <div className="card-body">
            {/* Card Titles */}
            <div className="card-info">
                <h4 className="card-title">{task.task_name}</h4>
                <h3 className="card-title">Task Due Date</h3>
                <p className="card-text">{task.due_date}</p>
                <h3 className="card-title">Task Priority</h3>
                <p className="card-text">{task.priority}</p>
                <h3 className="card-title">Task Group</h3>
                <p className="card-text">{task.taskgroup}</p>
            </div>
            {/* Card Descriptions */}
            <div className="card-description">

            </div>
            {/* Card Buttons */}
            <div className="card-buttons">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-success">Mark as Complete</button>
            </div>
        </div>
        </div>
    );
}

// Export Function to App
export default TaskCard;