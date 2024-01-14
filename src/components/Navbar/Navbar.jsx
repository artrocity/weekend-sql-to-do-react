// Import modules
import React from 'react';
import './Navbar.css';

// Function to create the sidenavbar
function Navbar({ toggleTheme }) {
    return (
        <div className="navbar-container bg-dark">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Volk Task Tracker</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" aria-current="page">
                        Add a Task
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
            </div>
            <button onClick={toggleTheme} className="btn btn-dark mb-3">
                Toggle Theme
            </button>
        </div>
    );
}

// Export the navbar function
export default Navbar;