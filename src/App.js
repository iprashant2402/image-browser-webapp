import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import { connect } from 'react-redux';
import Header from './components/header'; 

function App() {
  return (
    <div>
      <Header className="App-header" />
    </div>
  );
}

export default App;
