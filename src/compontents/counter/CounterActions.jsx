import "./counter-style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incrementNum } from "../redux/CounterRedux";
import { decrementNum } from "../redux/CounterRedux";

// const CounterActions = (props) => {
//   return (
//     <>
//       <button className="fw-bold bg-success fs-4 p-3" onClick={props.plus}>
//         Increment
//       </button>
//       <h1>{props.counter}</h1>
//       <button className="fw-bold bg-danger fs-4 p-3" onClick={props.minus}>
//         Decrement
//       </button>
//     </>
//   );
// };

const CounterActions = () => {
  const counter = useSelector((state) => state.counterReducer.counter);

  const dispatch = useDispatch();

  const plus = () => {
    dispatch(incrementNum(1));
  };

  const minus = () => {
    dispatch(decrementNum(1));
  };

  return (
    <>
      <button className="fw-bold bg-success fs-4 p-3" onClick={plus}>
        Increment
      </button>
      <h1>{counter}</h1>
      <button className="fw-bold bg-danger fs-4 p-3" onClick={minus}>
        Decrement
      </button>
    </>
  );
};

export default CounterActions;
