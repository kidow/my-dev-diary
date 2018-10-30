import React, { Component } from 'react';
import InputTemplate from '../components/InputTemplate';
import * as inputActions from '../store/input'
import * as todosActions from '../store/todos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class InputContainer extends Component {

  id = 1
  getId = () => {
    return ++this.id;
  }

  onChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }

  onInsert = e => {
    e.preventDefault()
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      id: this.getId(),
      text: value
    };
    if (!value) {
      alert('내용을 입력하세요')
    } else {
      TodosActions.insert(todo)
      InputActions.setInput('')
    }
  }

  render() {
    const { value } = this.props
    const { onChange, onInsert } = this
    return (
      <InputTemplate 
        onChange={onChange}
        onInsert={onInsert}
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