import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        color: "black",
        flexDirection: "column",
        width: "214px",
        margin: "0 auto",
        height: "auto",
        overflowY: "auto",
        overflowX: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        
      }}
    >
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(TodosList);
