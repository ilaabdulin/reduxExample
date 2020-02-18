import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
  fixedData
} from "../store/counter/actions";

const CounterView = ({
  counter,
  increment,
  decrement,
  reset,
  data,
  incrementLoading,
  fixedData
}) => {
  console.log("Render: Counter component");
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      {data && <h3>data: {data}</h3>}
      {incrementLoading && <h1>loading...</h1>}
      <button onClick={() => increment("Some async data")}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={fixedData}>fixedData</button>
    </div>
  );
};

const mapStateToProps = state => {
  /**
   * trigger after subscribe
   * update after each action call
   * ! (all active subscriptions) !
   */
  console.log("Trigger: mSTP function (Counter component)");
  return {
    counter: state.counter.count,
    data: state.counter.data,
    incrementLoading: state.counter.incrementLoading
  };
};

const mapDispatchToProps = dispatch => {
  // trigger after subscribe
  console.log("Trigger: mDTP function (Counter component) ");
  return {
    increment: data => dispatch(increment(data)),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    fixedData: () => dispatch(fixedData())
  };
};

// const mapDispatchToProps = dispatch => {
//   login: (data) => dispatch(login(data))
// }

const enhancer = () => {
  // trigger after subscribe
  console.log("Trigger: connect function, (Counter component)");
  return connect(
    mapStateToProps,
    mapDispatchToProps
  );
};

export const Counter = enhancer()(CounterView);
