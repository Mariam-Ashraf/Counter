import TodoForm from "../compontents/to-do/TodoForm";
import TodoList from "../compontents/to-do/TodoList";

function Todo() {
  return (
    <div
      className="pt-2 d-flex justify-content-center"
      style={{
        columnGap: "5em",
        backgroundColor: "#496E98",
        paddingBottom: "20em",
      }}
    >
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
