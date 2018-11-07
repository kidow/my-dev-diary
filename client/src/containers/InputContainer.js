import React, { Component } from 'react';
import InputTemplate from '../components/InputTemplate';
import * as inputActions from '../store/input'
import * as todosActions from '../store/todos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class InputContainer extends Component {
  getUserList = () => {
    const { TodosActions } = this.props
    TodosActions.getTodos()
  }

  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }

  handleToggle = (learned) => {
    const { InputActions } = this.props
    InputActions.toggle(learned)
  }

  handleInsert = async () => {
    const { InputActions, TodosActions, value, learned } = this.props;
    try {
      if (!value) {
        alert('내용을 입력하세요')
      } else {
        await TodosActions.postTodos({ text: value, learned })
        InputActions.initialize()
        this.getUserList()
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  handleKeyPress = e => {
    if(e.key === 'Enter') {
      this.handleInsert()
    }
  }

  render() {
    const { value, learned } = this.props
    const { handleChange, handleInsert, handleKeyPress, handleToggle } = this
    return (
      <InputTemplate 
        onChange={handleChange}
        onInsert={handleInsert}
        onKeyPress={handleKeyPress}
        onToggle={handleToggle}
        value={value}
        learned={learned}
      />
    );
  }
}

export default connect(
  state => ({
    value: state.input.get('value'),
    learned: state.input.get('learned')
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(InputContainer);