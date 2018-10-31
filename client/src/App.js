import React from 'react';
import InputContainer from './containers/InputContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <h2>My Dev Diary</h2>
      <InputContainer />
      <TodosContainer />
    </div>
  );
};

export default App;