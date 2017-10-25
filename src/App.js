// stateless functional components

import React, { Component } from 'react';
import logo from './logo.svg';
import IndecisionApp from './components/IndecisionApp'

class App extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <IndecisionApp />
      </div>
    );
  }
}

export default App;
