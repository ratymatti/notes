import React from 'react';
import AddNote from '../AddNote/AddNote';

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
        <div className='Notes'>
            {
                notes.map((note, index) => (
                    <h3 
                        onClick={() => handleClick(index)}
                        key={index}>{note.title}</h3>
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

