import React from 'react';

const InputTemplate = ({ value, learned, onChange, onInsert, onKeyPress, onToggle }) => {
  return (
    <div>
      <input onChange={onChange} value={value} placeholder='할 일을 입력하세요' onKeyPress={onKeyPress}/>
      <div onClick={onToggle}>
        <input type='checkbox' checked={learned} readOnly/> 배운 것
      </div>
      <button onClick={onInsert}>추가</button>
    </div>
  );
};

export default InputTemplate;