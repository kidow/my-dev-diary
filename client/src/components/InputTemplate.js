import React from 'react';

const InputTemplate = ({ value, onChange, onInsert }) => {
  return (
    <form>
      <input onChange={onChange} value={value}/>
      <button onClick={onInsert}>추가</button>
    </form>
  );
};

export default InputTemplate;