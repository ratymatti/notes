import React from 'react'
import './Current.css';
import EditInput from '../EditInput/EditInput';

export default function Current(props) {
    const { 
            notes,
            current,
            editNote,
            editTitle,
            activeInput,
            setActiveInput
        } = props;

    function handleContentSubmit(content) {
        const currentNote = notes[current];
        const editedNote = {
            title: currentNote.title,
            content: content
        };
        editNote(editedNote);
        setActiveInput('');       
    }

    function handleTitleSubmit(title) {
        const currentNote = notes[current];
        const editedNote = {
            title: title,
            content: currentNote.content
        };
        editTitle(editedNote);
        setActiveInput(''); 
    }

    return (
        <div className='Current'>
            <div className='options'></div>
            {activeInput === 'title' ?
                <EditInput
                handleSubmit={handleTitleSubmit}
                currentValue={notes[current].title} />
                
            :   <h3 onClick={() => setActiveInput('title')}>{notes[current].title}</h3> }
            {activeInput === 'content' ?
                <EditInput
                handleSubmit={handleContentSubmit}
                currentValue={notes[current].content} /> 
            :   <p onClick={() => setActiveInput('content')}>{notes[current].content ? notes[current].content : 'click here to type...'}</p> }
        </div>
    )
               
}

