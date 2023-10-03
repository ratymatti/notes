import React from 'react'
import './Current.css';
import EditInput from '../EditInput/EditInput';
import './Current.css';

export default function Current(props) {
    const { 
            notes,
            current,
            editNote,
            editTitle,
            activeInput,
            setActiveInput
        } = props;

    function handleContentSubmit(content, dateString) {
        const currentNote = notes[current];
        const editedNote = {
            title: currentNote.title,
            content: content,
            date: dateString
        };
        editNote(editedNote);
        setActiveInput('');       
    }

    function handleTitleSubmit(title, dateString) {
        const currentNote = notes[current];
        const editedNote = {
            title: title,
            content: currentNote.content,
            date: dateString
        };
        editTitle(editedNote);
        setActiveInput(''); 
    }

    return (
        <div id='current-note'>
            <p id='current-note-date'>{notes[current].date}</p>
            {activeInput === 'title' ?
                <EditInput
                    handleSubmit={handleTitleSubmit}
                    currentValue={notes[current].title} />
                
            :   <h3 id='current-note-title' onClick={() => setActiveInput('title')}>{notes[current].title}</h3> } 
            {activeInput === 'content' ?
                <EditInput
                    handleSubmit={handleContentSubmit}
                    currentValue={notes[current].content}
                    activeInput={activeInput} /> 
            :   <p id='content' onClick={() => setActiveInput('content')}>{notes[current].content ? notes[current].content : 'click here to type...'}</p> }
        </div>
    )
               
}

