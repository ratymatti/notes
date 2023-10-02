import React from 'react'
import { useState } from 'react'

export default function AddNote(props) {
    const { addNewNote } = props;

    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState('');

    function handleClick() {
        setIsClicked(true);
    }

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleInputSubmit(e) {
        if (e.key === 'Enter') {
            addNewNote({title: text, content: ''});
            setIsClicked(false);
            setText('Add new note');
        }
    }

    return (
        <div className='AddNote'>
            { isClicked ?
                <div className='input'>
                    <input
                        type='text'
                        placeholder='Add new note'
                        onChange={handleInputChange}
                        onKeyDown={handleInputSubmit} >
                    </input>
                    <button onClick={() => setIsClicked(false)}>close</button>
                </div>  
                

            :   <h3 onClick={handleClick}>+ New Note</h3>
            }
        </div> 
    )
}

