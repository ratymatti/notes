import './App.css';
import { useState } from 'react';
import Notes from './components/Notes/Notes';
import Current from './components/Current/Current';

function App() {
  const [notes, setNotes] = useState([{title: 'note1', content: 'note1 text', date: "03-10-2023 14:52:55"}, {title: 'note2', content: 'note2 text', date: "03-10-2023 14:55:45"}, {title: 'note3', content: 'note3 text', date: "03-10-2023 14:55:15"}]);
  const [current, setCurrent] = useState(0);
  const [activeInput, setActiveInput] = useState('');

  function changeActiveInput(input) {
    setActiveInput(input);  
  };

  function addNewNote(note) {
    const currentNotes = notes;
    setNotes([...currentNotes, note]);
    setCurrent(notes.length);
    setActiveInput('');
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

  function deleteNote(noteToDelete) {
    const newNotes = notes.filter((note, index) => index !== noteToDelete);
  
    if (noteToDelete > 0) {
      setCurrent(noteToDelete - 1);
    } else {
      setCurrent(0);
    }
  
    setNotes([...newNotes]);
  }
  

  return (
    <div className="App">
      <div className='notes-container'>
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
                            setActiveInput={setActiveInput}
                            deleteNote={deleteNote} /> : <p>You haven't added any notes yet</p> }
        
      </div>

    </div>
  );
}

export default App;
