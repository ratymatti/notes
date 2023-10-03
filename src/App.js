import './App.css';
import { useState } from 'react';
import Notes from './components/Notes/Notes';
import Current from './components/Current/Current';

function App() {
  const [notes, setNotes] = useState([{title: 'note1', content: 'note1 text'}, {title: 'note2', content: 'note2 text'}, {title: 'note3', content: 'note3 text'}]);
  const [current, setCurrent] = useState(0);
  const [activeInput, setActiveInput] = useState('');

  function changeActiveInput(input) {
    setActiveInput(input);  
  };

  function addNewNote(note) {
    const currentNotes = notes;
    setNotes([...currentNotes, note]);
    setCurrent(notes.length);
  }

  function editNote(note) {
    const currentNotes = [...notes];
    currentNotes[current] = note;
    setNotes([...currentNotes]);
  }

  function editTitle(note) {
    const currentNotes = [...notes];
    currentNotes[current] = note;
    setNotes([...currentNotes]);
  }

  return (
    <div className="App">
      <div className='notes'>
        <h1>Notes</h1>
        <Notes
          setCurrent={setCurrent}
          notes={notes}
          addNewNote={addNewNote}
          current={current}
          activeInput={activeInput}
          setActiveInput={setActiveInput} />
      </div>
      <div className='current'>
        {notes.length ? <Current
                            notes={notes}
                            current={current}
                            editNote={editNote}
                            editTitle={editTitle}
                            activeInput={activeInput}
                            setActiveInput={setActiveInput} /> : <p>You haven't added any notes yet</p> }
        
      </div>

    </div>
  );
}

export default App;
