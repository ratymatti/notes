import React from 'react';
import AddNote from '../AddNote/AddNote';
import './Notes.css'

export default function Notes(props) {
    const { 
            notes,
            setCurrent,
            addNewNote,
            current,
            activeInput,
            setActiveInput
        } = props;
    
    function handleClick(id) {
        setCurrent(id);
        setActiveInput('');
    }

    return (
        <div className='notes'>
            {
                notes.map((note, index) => (
                    <div className='note' key={index}>
                        <h3 
                        onClick={() => handleClick(index)} > { note.title.length > 20 ? note.title.slice(0, 20) + '...' : note.title }</h3>
                        <p>{note.date}</p>      
                    </div>
                ))
            }
            <AddNote
                addNewNote={addNewNote}
                current={current}
                activeInput={activeInput}
                setActiveInput={setActiveInput} />
        </div>
    )
}

