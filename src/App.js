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
      <div class="container">
        <div class="row">
          <div class="col-sm">
            One of one columns
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            One of two columns
          </div>
          <div class="col-sm">
            One of two columns
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
