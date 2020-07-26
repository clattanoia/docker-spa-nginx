import React from 'react';
import './App.css';
import { getConfig } from './config';

function App() {
  return (
    <div className="App">
      <pre>{JSON.stringify(getConfig(), null, 2)}</pre>
    </div>
  );
}

export default App;
