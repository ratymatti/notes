import React from 'react'
import { useState } from 'react'

export default function AddNote() {
    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState('Add new note');

    function handleClick() {
        setIsClicked(true);
    }

    function handleInputChange(e) {
        setText(e.target.value);
    }

    return (
        <div className='AddNote'>
            { isClicked ? 
                <input
                    type='text'
                    placeholder={text}
                    onChange={handleInputChange}>
                </input>
                 
            :   <h3 onClick={handleClick}>+ New Note</h3>
            }
        </div> 
    )
}

