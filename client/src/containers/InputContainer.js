import React, { Component } from 'react';
import InputTemplate from '../components/InputTemplate';
import * as inputActions from '../store/input'
import * as todosActions from '../store/todos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class InputContainer extends Component {
  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      text: value
    };
    if (!value) {
      alert('내용을 입력하세요')
    } else {
      TodosActions.postTodos(todo)
      InputActions.initialize()
    }
  }

  render() {
    const { value } = this.props
    const { handleChange, handleInsert } = this
    return (
      <InputTemplate 
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    );
  }
}

export default connect(
  state => ({
    value: state.input.get('value')
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(InputContainer);