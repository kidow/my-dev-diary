import React, { Component } from 'react';
import TodosTemplate from '../components/TodosTemplate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todosActions from '../store/todos'

class TodosContainer extends Component {
  
  render() {
    const { todos } = this.props
    return (
      <TodosTemplate todos={todos}/>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodosContainer);