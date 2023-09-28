import './App.css';
import { useState } from 'react';
import Notes from './components/Notes/Notes';
import Current from './components/Current/Current';

function App() {
  const [notes, setNotes] = useState(['note 1', 'note 2', 'note 3']);
  const [current, setCurrent] = useState();

  return (
    <div className="App">
      <div className='notes'>
        <h1>Notes</h1>
        <Notes
          setCurrent={setCurrent}
          notes={notes}/>
      </div>
      <div className='current'>
        <Current
          notes={notes}
          current={current} />
      </div>

    </div>
  );
}

export default App;
