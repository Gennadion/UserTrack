import React from 'react';
import Card from './components/Card';
import './App.css';
import NewUser from './components/NewUser';

function App() {
  return (
    <div className="App">
      <Card>
        <NewUser />
      </Card>
    </div>
  );
}

export default App;
