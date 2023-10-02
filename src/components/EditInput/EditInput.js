import React, { useState } from 'react'

export default function EditInput(props) {
    const { handleSubmit, currentValue } = props;

    const [content, setContent] = useState(currentValue);

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
                value={content}
                onChange={handleContentChange}
                onKeyDown={handleContentSubmit} >
            </input>
        </div>
    )
}

