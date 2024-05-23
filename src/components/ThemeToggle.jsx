import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the initial theme from localStorage or default to false
    return localStorage.getItem('theme') === 'dark';
  });


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');

    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');

    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className='text-black tooltip tooltip-bottom' data-tip={isDarkMode? 'Light mode': 'Dark mode'}>
      {isDarkMode? <FaSun></FaSun>: <FaMoon></FaMoon>}
    </button>
  );
};

export default ThemeToggle;