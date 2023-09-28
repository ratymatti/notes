import React from 'react'

export default function Current(props) {
    const { notes, current } = props;

    return (
        <div className='Current'>
            <h3>{notes[current]}</h3>
        </div>
    )
}

