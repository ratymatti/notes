import React from 'react'
import { useEffect } from 'react'
import EditInput from '../EditInput/EditInput';

export default function AddNote(props) {
    const { 
            addNewNote,
            current,
            activeInput,
            setActiveInput
        } = props;

    function handleInputSubmit(content) {
        const date = new Date();
        addNewNote({title: content, content: '', date: date});   
    }

    useEffect(() => {
        setActiveInput('');
    },[current]);

    return (
        <div className='AddNote'>
            { activeInput === 'new' ? <EditInput handleSubmit={handleInputSubmit} /> : <h3 onClick={() => setActiveInput('new')}>+ New Note</h3> }
        </div> 
    )
}

