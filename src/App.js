import React, { Component } from 'react';
import './App.css';
import SectionForm from './SectionForm';

class App extends Component{
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Budget App</h1>
        </header>
        <SectionForm />
      </div>
    );
  }
}

export default App;
