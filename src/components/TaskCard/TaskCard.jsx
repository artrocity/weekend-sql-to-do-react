// Import Modules
import React from 'react';
import './TaskCard.css'

// Function to display tasks on a task card
function TaskCard({ task }) {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    {/* Card Titles */}
                    <div className="card-info">
                        <h3 className="card-title">{task.task_name}</h3>
                        <hr />
                        <h5 className="card-title">Task Due Date</h5>
                        <p className="card-text">{task.due_date}</p>
                        <h5 className="card-title">Task Priority</h5>
                        <p className="card-text">{task.priority}</p>
                        <h5 className="card-title">Task Group</h5>
                        <p className="card-text">{task.task_group}</p>
                    </div>
                    {/* Card Descriptions */}
                    <div className="card-description">
                        <h5 className="card-title">Task Description</h5>
                        <p className="card-text">{task.description}</p>
                    </div>
                    <hr />
                    {/* Card Buttons */}
                    <div className="card-buttons">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                        <hr />
                        <button className="btn btn-success">Mark as Complete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

// Export Function to App
export default TaskCard;