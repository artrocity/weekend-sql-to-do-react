// Import Modules
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import TaskList from '../TaskList/TaskList';
import './App.css'

// Create Main App Root to be used in index.jsx
function App() {
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='app-container'>
            <div className='nav-bar-section'>
                <Navbar />
            </div>
            <div className='right-section'>
                <div className='task-list-section'>
                    <TaskList />
                </div>
            </div>
            
        </div>

    );
}

// Export App
export default App;
