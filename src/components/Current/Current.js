import React, { useState } from 'react'
import './Current.css';
import EditInput from '../EditInput/EditInput';

export default function Current(props) {
    const { notes, current, editNote } = props;

    const [content, setContent] = useState();

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    function handleInputSubmit(e) {
        if (e.key === 'Enter') {
            const currentNote = notes[current];
            const editedNote = {
                title: currentNote.title,
                content: content
            };
            editNote(editedNote);       
        }  
    }

        return (
            <div className='Current'>
                <div className='options'></div>
                <h3>{notes[current].title}</h3>
                { notes[current].content ? 
                    <p>{notes[current].content}</p>

                : <input
                    type='text'
                    placeholder='type here'
                    onKeyDown={handleInputSubmit}
                    onChange={handleContentChange}></input>}
            </div>
        )
     
        
}

