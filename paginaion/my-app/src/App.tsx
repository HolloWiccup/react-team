import React from 'react';
import './App.css';
import MainPage from './components/mainPage';

function App() {
  return (
    <div className="App">
      <MainPage itemsPerPage={10}/>
    </div>
  );
}

export default App;