import React, { useState, useEffect, useRef } from 'react';

export default function EditInput(props) {
  const {  
            handleSubmit,
            currentValue,
            activeInput
        } = props;

  const [content, setContent] = useState(currentValue);
  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus on the input element when the component is rendered
    inputRef.current.focus();
  }, []);

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
      { activeInput === 'content' ?
            <textarea   
                ref={inputRef}
                value={content}
                onChange={handleContentChange}
                onKeyDown={handleContentSubmit}
                rows={7}
                cols={50} ></textarea>
        : <input
            type='text'
            value={content}
            onChange={handleContentChange}
            onKeyDown={handleContentSubmit}
            ref={inputRef} />
      }
    </div>
  );
}


