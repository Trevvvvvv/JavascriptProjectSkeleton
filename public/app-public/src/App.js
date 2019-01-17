import React, { Component } from 'react';

import './App.css';

class App extends Component {
  qualcosa() {

    alert("Books");
  }
  render() {
    return (
      <div className="App">
        <h1><b>BOOKS</b></h1>
        <p><b>SEARCH YOUR BOOK</b></p>
        <div>
          <div className= "input-field">
            <input type = "search" id = "books"></input>
            <button className = "btn" onClick={() => {alert("Books");}}>SEARCH</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
