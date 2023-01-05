import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodoaction";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 > todos</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" ,color:"rgb(217,217,217)"}}
          onClick={deleteAll}
        >
          {" "}
          Clear Completed
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
