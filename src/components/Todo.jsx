import React from "react";
import "../styles.css";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodoaction";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid rgb(217,217,217)",
        background:"white",
        padding: "5px",
        cursor: "pointer",
       
       
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div className="xButton" onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
