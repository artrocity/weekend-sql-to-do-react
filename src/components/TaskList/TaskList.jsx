// Import Modules
import React, { useState, useEffect }from 'react';
import TaskCard from '../TaskCard/TaskCard';
import { fetchTasks } from '../../Service/apiService';
import './TaskList.css';
import todo_img from './assets/todo_img.avif';

// Function to Render the Current Tasks on the UI
function TaskList() {
    const [tasks, setTasks] = useState([]);

    const refreshTaskList = () => {
        fetchTasks()
        .then(fetchTasks => {
            setTasks(fetchTasks);
        });
    }

    useEffect(() => {
        refreshTaskList();
    }, [])


    return (
        <div>
            <h1>Tasks</h1>
            {/* If tasks display the current tasks : Else Display Image*/}
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} onTaskDeleted={refreshTaskList}/>
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