import React, { Component } from 'react';
import TodosTemplate from '../components/TodosTemplate/TodosTemplate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todosActions from '../store/todos'
import Pagination from '../components/Pagination';
import Loading from '../components/Loading/Loading';

class TodosContainer extends Component {
  getTodoList = () => {
    const { TodosActions } = this.props
    TodosActions.getTodos()
  }

  componentDidMount() {
    this.getTodoList()
  }
  
  render() {
    const { todos, loading } = this.props
    return (
      <>
        {loading ? <Loading /> : <TodosTemplate todos={todos}/>}
        <Pagination />
      </>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos.get('todos'),
    loading: state.pender.pending['todos/GET_TODOS']
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodosContainer);