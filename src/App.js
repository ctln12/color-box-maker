import './App.css';
import BoxList from "./BoxList";

import React, { Component } from 'react';

// this component should render the BoxList component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color Box Maker</h1>
        <BoxList />
      </div>
    );
  }
}

export default App;
