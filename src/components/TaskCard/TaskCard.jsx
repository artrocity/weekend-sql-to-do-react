// Import Modules
import React, { useState } from 'react';
import './TaskCard.css';
import { format, parseISO } from 'date-fns';
import { fetchTasks, deleteTask, updateTask } from '../../Service/apiService';

// Function to display tasks on a task card
function TaskCard({ task, onTaskDeleted }) {
    const [expanded, setExpanded] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    // Format the Date Of Each Task
    const formattedDate = task.due_date ? format(parseISO(task.due_date), 'MMMM d, yyyy') : 'No date available for this task';

    // Logic for the delete button to make a delete request
    const deleteCurrentTask = () => {
        if (task.id) {
            deleteTask(task.id)
                .then(() => {
                    onTaskDeleted()
                })
                .catch((error) => {
                    console.error("Error Deleting a task VIA DELETE: ", error);
                })
        } else {
            alert("No Associated Task ID - Unable To Delete Task");
        }
    }

    // Logic for the editing of tasks
    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        updateTask(editedTask.id, editedTask)
            .then(() => {
                setIsEditMode(false)
                onTaskDeleted()
            })
            .catch(error => {
                console.error("Error Updating Task");
            });
    };

    const handleChange = (event) => {
        setEditedTask({ ...editedTask, [event.target.name]: event.target.value})
    };

    return  (
        <div className="card shadow-div">
            <div 
                className="card-header d-flex align-items-center justify-content-between"
                onClick={toggleExpanded}
            >
                <div className="d-flex align-items-center">
                    <input 
                        type="radio" 
                        className="mark-complete-checkbox me-2" 
                        onChange={() => { deleteCurrentTask() }} 
                    />
                    <h4 className="card-title mb-0">{task.task_name}</h4>
                </div>
                <button onClick={toggleExpanded} className="btn btn-primary">
                    {expanded ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {expanded && (
                <div className="card-body">
                    {isEditMode ? (
                        <div>
                            {/* Editable fields for task details */}
                            <h3>Edit The Task</h3>
                            <input type="text" className="form-control my-2" name="task_name" value={editedTask.task_name} onChange={handleChange} />
                            <input type="date" className="form-control my-2" name="due_date" value={editedTask.due_date} onChange={handleChange} />
                            <select name="priority" className="form-control my-2" value={editedTask.priority} onChange={handleChange}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            <input type="text" className="form-control my-2" name="task_group" value={editedTask.task_group} onChange={handleChange} />
                            <textarea name="description" className="form-control my-2" value={editedTask.description} onChange={handleChange} />
                            <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
                        </div>
                    ) : (
                        <div className="card-info">
                            {/* Display non-editable task details */}
                            <h5>Due Date</h5>
                            <p className="card-text">{formattedDate}</p>
                            <h5>Priority Level</h5>
                            <p className="card-text">{task.priority}</p>
                            <h5>Task Group</h5>
                            <p className="card-text">{task.task_group}</p>
                            <h5>Description</h5>
                            <p className="card-text">{task.description}</p>
                            <div className="card-buttons">
                                <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                                <button className="btn btn-danger" onClick={deleteCurrentTask}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}


export default TaskCard;
