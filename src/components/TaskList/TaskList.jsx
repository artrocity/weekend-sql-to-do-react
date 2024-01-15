// Import Modules
import React, { useState, useEffect }from 'react';
import TaskCard from '../TaskCard/TaskCard';
import { fetchTasks } from '../../Service/apiService';
import './TaskList.css'

// Function to Render the Current Tasks on the UI
function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
        .then(fetchTasks => {
            setTasks(fetchTasks);
        });
    }, [])


    return (
        <div className="card-container">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

// Export Tasks
export default TaskList;