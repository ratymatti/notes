import React from 'react'
import './Current.css';

export default function Current(props) {
    const { notes, current, editNote } = props;

    

        return (
            <div className='Current'>
                <div className='options'></div>
                <h3>{notes[current].title}</h3>
                {notes[current].content ? <p>{notes[current].content}</p> : <input type='text' placeholder='type here'></input>}
            </div>
        )
     
        
}

