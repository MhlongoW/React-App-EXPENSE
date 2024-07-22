import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {TransactionList} from './components/TransationList'
import {AddTransaction} from './components/AddTransaction'




function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Balance />
        <TransactionList/>
        <AddTransaction/>
      </div>
    </>
  );
}

export default App;
