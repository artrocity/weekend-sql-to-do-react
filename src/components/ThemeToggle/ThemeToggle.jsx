// Import Modules
import React from 'react';

// Create function to change between light/dark mode
function ThemeToggle({ toggleTheme }) {
    return (
        <button className="btn btn-secondary" onClick={toggleTheme}>
        Toggle Theme
        </button>
    );
}

// Export function to app
export default ThemeToggle;