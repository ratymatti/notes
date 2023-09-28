import React from 'react'

export default function Notes(props) {
    const { notes } = props;
    
    return (
        <div className='Notes'>
            {
                notes.map((note, index) => (
                    <h3 key={index}>{note}</h3>
                ))
            }
        </div>
    )
}

