import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Form />
    </div>
  );
}

export default App;
