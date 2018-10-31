import React, { Component } from 'react';
import ItemTemplate from './ItemTemplate';
import axios from 'axios'

class TodosTemplate extends Component {
  componentDidMount() {
    axios.get('/post').then(res => res.data)
  }
  render() {
    const { todos } = this.props
    const todoList = todos.map(todo => (
      <ItemTemplate key={todo.get('id')}>
        {todo.get('text')}
      </ItemTemplate>
    ))
    return todoList
  }
}

export default TodosTemplate;