import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState();

  return (
    <div className="App">
      <div className='notes'>
        <h1>Notes</h1>
      </div>
      <div className='current'>
        <h3>current</h3>
      </div>

    </div>
  );
}

export default App;
