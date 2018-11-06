import React from 'react';
import moment from 'moment'
import 'moment/locale/ko'

const TodosTemplate = ({todos}) => {
  console.log('todos :', todos)
  const todoList = todos.map(todo => {
    return (
      <div key={todo._id}>
        <span>{todo.text} </span>
        <span>{moment(todo.createdAt).format('ll')}</span>
      </div>
    )
  })
  return todoList
};

export default TodosTemplate;