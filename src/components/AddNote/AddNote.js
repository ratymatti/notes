import React from 'react'
import { useEffect } from 'react'
import EditInput from '../EditInput/EditInput';
import './AddNote.css';

export default function AddNote(props) {
    const { 
            addNewNote,
            current,
            activeInput,
            setActiveInput
        } = props;

    function handleInputSubmit(content, dateString) {
        addNewNote({ title: content, content: '', date: dateString });
    }
          
          

    useEffect(() => {
        setActiveInput('');
    },[current]);

    return (
        <div className='add-note'>
            { activeInput === 'new' ? <EditInput handleSubmit={handleInputSubmit} /> : <h3 onClick={() => setActiveInput('new')}>+ New Note</h3> }
        </div> 
    )
}

