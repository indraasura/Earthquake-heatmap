import React, { Component } from 'react'
import './App.css';
import Heatmap from './components/Heatmap'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Heatmap />
      </>
    );
  }
}

export default App;
