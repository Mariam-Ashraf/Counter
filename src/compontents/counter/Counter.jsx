import CounterActions from "./CounterActions";
// import { useState } from "react";
import "./counter-style.css";

function Counter() {
  // const [counter, setCounter] = useState(0);

  // const plus = () => {
  //   setCounter(counter + 1);
  // };

  // const minus = () => {
  //   if (counter !== 0) setCounter(counter - 1);
  // };

  return (
    <div className="counter d-flex justify-content-center pt-5">
      {/* <CounterActions counter={counter} plus={plus} minus={minus} /> */}
      <CounterActions />
    </div>
  );
}

export default Counter;
