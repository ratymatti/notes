import React, { useState } from 'react'

export default function EditInput(props) {
    const { handleSubmit } = props;

    const [content, setContent] = useState('');

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    function handleContentSubmit(e) {
        if (e.key === 'Enter') {
            handleSubmit(content);    
        }
    }

    return (
        <div className='EditInput'>
            <input
                type='text'
                placeholder='placeholder'
                onChange={handleContentChange}
                onKeyDown={handleContentSubmit} >
            </input>
        </div>
    )
}

