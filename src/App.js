import './App.css';
import { useState } from 'react';
import Notes from './components/Notes/Notes';

function App() {
  const [notes, setNotes] = useState(['note 1', 'note 2', 'note 3']);

  return (
    <div className="App">
      <div className='notes'>
        <h1>Notes</h1>
        <Notes
          notes={notes}/>
      </div>
      <div className='current'>
        <h3>current</h3>
      </div>

    </div>
  );
}

export default App;
