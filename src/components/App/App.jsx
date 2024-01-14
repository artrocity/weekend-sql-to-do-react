import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import TaskList from './TaskList';
import ThemeToggle from './ThemeToggle';

function App() {
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`App ${theme}`}>
        <Navbar />
        <ThemeToggle toggleTheme={toggleTheme} />
        <TaskList />
        </div>
    );
}

export default App;
