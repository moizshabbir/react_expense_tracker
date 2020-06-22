import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import './TransactionReducer';

function App() {
    const reducer = useReducer(TransactionReducer)
  return (
      <TransactionContext.Provider value={reducer}>
    <div className="App">
      <header className="App-header">
          <h1>Expense Tracker</h1>
      </header>
      <div className="container">
          <Balance />
          <History />
          <Form />
      </div>
    </div>
    </TransactionContext.Provider>
  );
}

export default App;
