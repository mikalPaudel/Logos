import React from 'react';
import './App.css';
// import Header from './components/Header';
import MyRoute from './MyRoute';
import ThemeContext from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import { useContext } from 'react';



function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>      
      <ThemeProvider>
      {/* <Header /> */}
      <MyRoute />
      </ThemeProvider>
    </div>
  );
}

export default App;
