// Import Modules
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import './App.css';
import overlay_img from './assets/overlay.jpg';

// Create Main App Root to be used in index.jsx
function App() {
    const [showForm, setShowForm] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleShowTasks = () => {
        setShowForm(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 10000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            {showOverlay && (
                <div className="overlay">
                    <img src={overlay_img} alt='overlay image' />
                    <button 
                        onClick={() => setShowOverlay(false)}
                        class="btn btn-secondary"
                    >Get Started</button>
                </div>
            )}
            <div className="nav-bar-section">
                <Navbar onAddTaskClick={handleShowForm} onHomeClick={handleShowTasks}/>
            </div>
            <div className='right-section'>
                {showForm ? <TaskForm /> : <TaskList />}
            </div>
            
        </div>

    );
}

// Export App
export default App;
