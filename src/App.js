import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>
          Caroline Burns' Motive Project
        </h1>
      </div>
      <div className='button'>
        <button  type='button' className="btn-lg" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;
