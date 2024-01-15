// Import modules
import React, { useState } from 'react';
import './Navbar.css';

// Function to create the sidenavbar
function Navbar({ onThemeClick, onAddTaskClick, onHomeClick }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQuery = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <div className="navbar-container bg-dark">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Volk Task Tracker</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onAddTaskClick(); }}>
                        Add Task
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" aria-current="page">
                        Edit Tasks
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" aria-current="page">
                        About Volk
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" aria-current="page">
                        Support
                        </a>
                    </li>
                </ul>
                <hr />
                <form className="d-flex" onSubmit={handleSearchQuery}>
                    <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search for tasks..." 
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    />
                </form>
                <hr />
            </div>
            <button className="btn btn-dark mb-3">
                Toggle Theme
            </button>
        </div>
    );
}

// Export the navbar function
export default Navbar;