import React from 'react';
import './App.css';
import Formulario from './components/Formulario';
import logo from './logo_tanner.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      
      <Formulario />
    </div>
  );
}

export default App;
