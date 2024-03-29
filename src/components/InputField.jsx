import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../redux/action/addTodoaction";
const InputField = ({ addText, text, selected, addTodo }) => {
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (selected || selected === 0)
      editAddTodo({
        value: text,
        selected: selected
      });
    else addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="What needs to be done"
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
