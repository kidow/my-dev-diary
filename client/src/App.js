import React from 'react';
import InputContainer from './containers/InputContainer';
import TodosContainer from './containers/TodosContainer';
import './App.scss'

const App = () => {
  return (
    <div>
      <div className='main'>
        <h1>My Dev Diary</h1>
        <div className='content'>
          <InputContainer />
          <div className='explain'>
            <span className='learned'>Learned</span>
            <span className='to-learn'>To-learned</span>
          </div>
          <TodosContainer />
        </div>
      </div>
    </div>
  );
};

export default App;