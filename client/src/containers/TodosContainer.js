import React, { Component } from 'react';
import TodosTemplate from '../components/TodosTemplate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todosActions from '../store/todos'

class TodosContainer extends Component {
  getTodoList = () => {
    const { TodosActions } = this.props
    TodosActions.getTodos()
  }

  componentDidMount() {
    this.getTodoList()
  }
  
  render() {
    const { todos } = this.props
    return (
      <TodosTemplate todos={todos}/>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos.get('todos')
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodosContainer);