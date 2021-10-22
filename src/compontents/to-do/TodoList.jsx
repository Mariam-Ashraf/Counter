import { deleteFromList } from "../redux/TodoRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);

  const dispatch = useDispatch();

  const deleteTodo = (index) => {
    dispatch(deleteFromList(index));
  };

  const list =
    { todoList } && todoList.length > 0 ? (
      todoList.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border border-3 d-flex flex-column mx-auto p-3 bg-transparent">
              <p className="fw-bold fs-3">
                Title : <span style={{ color: "#590D45" }}>{todo.title}</span>
              </p>
              <p className="fw-bold fs-3">
                Content :
                <span style={{ color: "#590D45" }}> {todo.content}</span>
              </p>
              <button
                className="mt-4 mb-3 mx-auto btn btn-dark px-4 fs-4 fw-bold text-light"
                type="button"
                onClick={() => deleteTodo(i)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="text-center mx-5 text-light fs-4">
        no items on the list ..
      </p>
    );

  return (
    <div className="d-flex flex-column m-4">
      <h2
        className="text-center mx-5 my-5 fw-bold"
        style={{ color: "#590D45" }}
      >
        My List
      </h2>
      {list}
    </div>
  );
};

export default TodoList;
