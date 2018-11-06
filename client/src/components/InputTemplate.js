import React from 'react';

const InputTemplate = ({ value, onChange, onInsert }) => {
  return (
    <div>
      <input onChange={onChange} value={value} placeholder='todo'/>
      <button onClick={onInsert}>추가</button>
    </div>
  );
};

export default InputTemplate;