import React from 'react';
import ClickCounter from '../ClickCounter/ClickCounter';
import lowerCase from '../../utils/lowercase/lowercase';
import image from '../../images/react-logo.png';
import cover from '../../images/cover.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>{lowerCase('My React + Webpack Template')}</h1>
      <h2>PNG Image</h2>
      <p>
        <img src={image} alt="React Logo" width="112" height="101" />
      </p>
      <h2>SVG Image</h2>
      <img src={cover} alt="React Cover" width="300" />
      <ClickCounter />
    </div>
  );
}

export default App;
