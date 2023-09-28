import React from 'react'
import { useState } from 'react'

export default function AddNote(props) {
    const { addNewNote } = props;

    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState('Add new note');

    function handleClick() {
        setIsClicked(true);
    }

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleInputSubmit() {
        addNewNote(text);
        setIsClicked(false);
    }

    return (
        <div className='AddNote'>
            { isClicked ?
                <div>
                    <input
                    type='text'
                    placeholder={text}
                    onChange={handleInputChange} >
                </input>
                <button onClick={handleInputSubmit}>Add</button>    
                </div>  
                

            :   <h3 onClick={handleClick}>+ New Note</h3>
            }
        </div> 
    )
}

