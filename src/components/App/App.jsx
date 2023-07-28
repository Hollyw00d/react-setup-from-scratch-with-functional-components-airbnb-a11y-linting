import React from 'react';
import lowerCase from '../../utils/lowercase/lowercase';
import './App.css';

function App() {
  return (
    <div>
      <h1>{lowerCase('My React + Webpack Template')}</h1>
    </div>
  );
}

export default App;
