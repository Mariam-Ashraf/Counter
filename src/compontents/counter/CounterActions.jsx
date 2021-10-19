import "./counter-style.css";

const CounterActions = (props) => {
  return (
    <>
      <button className="fw-bold bg-success fs-4 p-3" onClick={props.plus}>
        Increment
      </button>
      <h1>{props.counter}</h1>
      <button className="fw-bold bg-danger fs-4 p-3" onClick={props.minus}>
        Decrement
      </button>
    </>
  );
};

export default CounterActions;
