import React from 'react';
import image from './images.png'; // Adjust this path according to your file structure

function App() {
  return (
    <div className="App">
      <img src={image} alt="React logo" />
      <h1>Fun Facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of apps</li>
      </ul>
    </div>
  );
}

export default App;
