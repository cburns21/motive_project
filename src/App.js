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
        <a  className= 'btn-lg'role='button' href='https://github.com/cburns21/motive_project'>
          Click Me to See the Code!
        </a>
      </div>
      <div className="card">
        <div className="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div className="card2">
        <div className="card-body">
          This is some text within a card body.
        </div>
        <div className="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div className="card3">
        <div className="card-body">
          This is some text within a card body.
        </div>
        <div className="card-body">
          This is some text within a card body.
        </div>
        <div className="card-body">
          This is some text within a card body.
        </div>
      </div>
    </div>
  );
}

export default App;
