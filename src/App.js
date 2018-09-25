import React, { Component } from 'react';
import Barra from "../src/components/Barra/Barra";
import Botones from "../src/components/Botones/Botones";
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       <Barra />
       <Botones />
      </div>
    );
  }
}

export default App;
