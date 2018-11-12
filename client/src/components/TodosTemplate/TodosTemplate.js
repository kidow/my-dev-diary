import React from 'react';
import moment from 'moment'
import './TodosTemplate.scss'

const TodosTemplate = ({todos}) => {
  const dateList = todos.map(date => moment(date.createdAt).format('ll'))
  const dates = [...new Set(dateList)]
  const todoList = dates.map((date, index) => {
    return (
      <div key={index} className='todo'>
        <h2 className='date'>{date}</h2>
        {todos.filter(item => moment(item.createdAt).format('ll') === date).map((item, i) => {
          return <div key={i} className={item.learned ? 'learned' : null}>{item.text}</div>
        })}
      </div>
    )
  })
  return todoList
};

export default TodosTemplate;