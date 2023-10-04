import React, { useState, useEffect, useRef } from 'react';
import './EditInput.css';

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

  function getDate() {
    const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      
      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  function handleContentSubmit(e) {
    if (e.key === 'Enter') {
      const dateString = getDate()
      handleSubmit(content, dateString);
    }
  }

  function handleSave() {
    const dateString = getDate();
    handleSubmit(content, dateString);
  }

  return (
    <div className='EditInput'>
      { activeInput === 'content' ?
            <div className='textarea'>
              <textarea   
                ref={inputRef}
                value={content}
                onChange={handleContentChange}
                onKeyDown={handleContentSubmit}
                rows={7}
                cols={50} ></textarea>
              <button type='submit' onClick={handleSave} >save</button>  
            </div>
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


