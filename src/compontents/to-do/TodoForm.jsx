import { addToList } from "../redux/TodoRedux";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addToList(task));
  };

  return (
    <div className="d-flex flex-column m-5">
      <h2
        className="text-center mx-5 my-4 fw-bold"
        style={{ color: "#590D45" }}
      >
        TO-DO LIST
      </h2>

      <form
        onSubmit={handleSubmission}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          style={{ width: "30em", height: "2.2em" }}
          className="my-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="content"
          placeholder="Content"
          style={{ width: "30em", height: "6em" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="mt-4 mb-5 btn btn-dark btn-sm px-4 fs-4 fw-bold border-0"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
