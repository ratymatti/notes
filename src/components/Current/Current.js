import React, { useState, useEffect } from 'react'
import './Current.css';
import EditInput from '../EditInput/EditInput';

export default function Current(props) {
    const { notes, current, editNote, editTitle } = props;

    const [selected, setSelected] = useState('');

    function handleContentSubmit(content) {
    
        const currentNote = notes[current];
        const editedNote = {
            title: currentNote.title,
            content: content
        };
        editNote(editedNote);       
        setSelected('');
    }

    function handleTitleSubmit(title) {
        const currentNote = notes[current];
        const editedNote = {
            title: title,
            content: currentNote.content
        };
        editTitle(editedNote);
        setSelected('');
    }

    useEffect(() => {
        setSelected('');
    },[current])
    
    return (
        <div className='Current'>
            <div className='options'></div>
            {selected !== 'title' ?
                <h3 onClick={() => setSelected('title')}>{notes[current].title}</h3>
            :   <EditInput
                    handleSubmit={handleTitleSubmit}
                    currentValue={notes[current].title} /> }
            {selected !== 'content' ? 
                <p onClick={() => setSelected('content')}>{notes[current].content ? notes[current].content : 'click here to type...'}</p>
            :   <EditInput
                    handleSubmit={handleContentSubmit}
                    currentValue={notes[current].content} /> }
        </div>
    )
               
}

