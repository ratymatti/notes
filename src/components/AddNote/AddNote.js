import React from 'react'
import { useState, useEffect } from 'react'
import EditInput from '../EditInput/EditInput';

export default function AddNote(props) {
    const { addNewNote, current } = props;

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(true);
    }

    function handleInputSubmit(content) {
        const date = new Date();
        addNewNote({title: content, content: '', date: date});
        setIsClicked(false);    
    }

    useEffect(() => {
        setIsClicked(false);
    },[current]);


    return (
        <div className='AddNote'>
            { isClicked ? <EditInput handleSubmit={handleInputSubmit} /> : <h3 onClick={handleClick}>+ New Note</h3> }
        </div> 
    )
}

