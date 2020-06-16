import React, { Component } from 'react'
import SortingVisualiser from './SortingVisualiser'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className = "App">
        <h1>Sorting Algorithms Visualiser</h1>
        <SortingVisualiser />
      </div>
    )
  }
}

export default App