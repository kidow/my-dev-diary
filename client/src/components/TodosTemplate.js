import React, { Component } from 'react';
import ItemTemplate from './ItemTemplate';

class TodosTemplate extends Component {
  render() {
    const { todos } = this.props
    const todoList = todos.map(todo => (
      <ItemTemplate key={todo.get('id')}>
        {todo.get('text')}
      </ItemTemplate>
    ))
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodosTemplate;