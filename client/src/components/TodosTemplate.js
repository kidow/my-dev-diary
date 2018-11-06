import React from 'react';

const TodosTemplate = ({todos}) => {
  console.log(todos)
  const todoList = todos.map(todo => {
    return todo.text
  })
  return (
    <div>
      {todoList}
    </div>
  );
};

export default TodosTemplate;