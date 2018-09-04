import React, { Component } from 'react';
import './App.css';
import Plan from './components/Plan/Plan';
import { DaysProvider } from './components/contexts/Days';

class App extends Component {
  render() {
    return (
      <DaysProvider>
        <Plan />
      </DaysProvider>
    );
  }
}

export default App;
