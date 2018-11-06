import React from 'react';
import moment from 'moment'
import 'moment/locale/ko'

const TodosTemplate = ({todos}) => {
  const dateList = todos.map(date => {
    return moment(date.createdAt).format('ll')
  })
  const dates = [...new Set(dateList)]
  const result = dates.map((date, index) => {
    return (
      <div key={index}>
        <h2>{date}</h2>
        {todos.filter(item => moment(item.createdAt).format('ll')).map((item, i) => {
          return <div key={i}>{item.text}</div>
        })}
      </div>
    )
  })
  return result
};

export default TodosTemplate;