// Import Modules
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import About from '../About/About';
import './App.css';
import overlay_img from './assets/overlay.png';

// Create Main App Root to be used in index.jsx
function App() {
    const [showForm, setShowForm] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const [showAbout, setShowAbout] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
        setShowAbout(false);
    };

    const handleShowTasks = () => {
        setShowForm(false);
        setShowAbout(false);
    };

    const handleShowAbout = () => {
        setShowAbout(!showAbout);
        setShowForm(false);
    }

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
                        className="btn btn-secondary"
                    >Get Started</button>
                </div>
            )}
            <div className="nav-bar-section">
                <Navbar onAddTaskClick={handleShowForm} onHomeClick={handleShowTasks} onAboutClick={handleShowAbout}/>
            </div>
            <div className='right-section'>
                {showForm ? <TaskForm /> : showAbout ? <About /> : <TaskList />}
            </div>
        </div>
    );
}

// Export App
export default App;
