import React from 'react';

const InputTemplate = ({ value, onChange, onInsert, onKeyPress }) => {
  return (
    <div>
      <input onChange={onChange} value={value} placeholder='todo' onKeyPress={onKeyPress}/>
      <button onClick={onInsert}>추가</button>
    </div>
  );
};

export default InputTemplate;