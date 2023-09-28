import React from 'react'

export default function Notes(props) {
    const { notes, setCurrent } = props;
    
    function handleClick(id) {
        setCurrent(id);
    }

    return (
        <div className='Notes'>
            {
                notes.map((note, index) => (
                    <h3 
                        onClick={() => handleClick(index)}
                        key={index}>{note}</h3>
                ))
            }
            <input type='text' placeholder='+ new note'></input>
        </div>
    )
}

