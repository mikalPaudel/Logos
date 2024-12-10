import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for consuming the context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
