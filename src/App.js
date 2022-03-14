//@ts-check


import { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState(initialState);
    return (
      <div className="App">
        <p>It's alive</p>
      </div>
    );
  
}

export default App;
