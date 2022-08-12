import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByTwo } from "./sayac";
export function ShowCount() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        aria-label="Increment value"
        onClick={(event, value) => dispatch(increment())}
      >
        increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={(event, value) => dispatch(decrement())}
      >
        decrement
      </button>
      <button
        aria-label="IncrementByTwo value"
        onClick={(event, value) => dispatch(incrementByTwo())}
      >
        incrementByTwo
      </button>
    </div>
  );
}
