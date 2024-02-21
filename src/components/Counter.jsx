import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(10));
  }

  function toggleHandler() {
    dispatch(counterActions.toggle());
  }

  return (
    <main>
      {showCounter && <h1>{counter}</h1>}
      <div className="">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleHandler}>on/of</button>
    </main>
  );
};

export default Counter;
