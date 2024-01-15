// Import Modules
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import './App.css'

// Create Main App Root to be used in index.jsx
function App() {
    const [theme, setTheme] = useState('dark');
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleShowTasks = () => {
        setShowForm(false);
    };

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='app-container'>
            <div className='nav-bar-section'>
                <Navbar onAddTaskClick={handleShowForm} onHomeClick={handleShowTasks} onThemeClick={handleToggleTheme}/>
            </div>
            <div className='right-section'>
                {showForm ? <TaskForm /> : <TaskList />}
            </div>
            
        </div>

    );
}

// Export App
export default App;
