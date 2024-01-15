// Import Modules
import React, { useState, useEffect }from 'react';
import TaskCard from '../TaskCard/TaskCard';
import { fetchTasks } from '../../Service/apiService';
import './TaskList.css';
import todo_img from './assets/todo_img.avif';

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
        <div>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))
            ) : (
                <div className="empty-list">
                    <h2>Create a Task To Get Started</h2>
                    <img src={todo_img} alt="No tasks" className="task-img"/>
                </div>
            )}
        </div>
    );
}

// Export Tasks
export default TaskList;