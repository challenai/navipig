import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">hello, world</div>
        <Counter />
      </header>
    </div>
  );
}

export default App;