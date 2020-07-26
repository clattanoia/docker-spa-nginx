import React from 'react';
import './App.css';
import runtimeEnv from './config/loadRuntimeEnv';

function App() {
  return (
    <div className="App">
      <pre>{JSON.stringify(runtimeEnv(), null, 2)}</pre>
    </div>
  );
}

export default App;
