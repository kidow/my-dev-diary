import React from 'react';
import './InputTemplate.scss'

const InputTemplate = ({ value, learned, onChange, onInsert, onKeyPress, onToggle }) => {
  return (
    <div className='todo-input'>
      <input 
        onChange={onChange} 
        value={value} 
        onKeyPress={onKeyPress} 
        autoFocus
      />
      <div onClick={onToggle} className='learned'>
        <input 
          type='checkbox' 
          className='checkbox' 
          onKeyPress={onKeyPress} 
          checked={learned} 
          readOnly
        />
      </div>
      <div onClick={onInsert} className='add-button'>
        ADD
      </div>
    </div>
  );
};

export default InputTemplate;