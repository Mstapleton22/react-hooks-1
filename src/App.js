import React from 'react';
import ProgressBar from './components/progressBar'
import './App.css';
import ThemeContextProvider from './contexts/themeContext';
import ProgressToggle from './components/progressToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ProgressBar />
        <ProgressToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
