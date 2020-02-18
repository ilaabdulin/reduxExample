import React from "react";
import { connect } from "react-redux";

export const ListView = () => {
  console.log("Render: ListView component");
  return (
    <>
      <h2>Будет ли обновление компонента?</h2>
      <ul>
        <li>some params</li>
        <li>some params</li>
        <li>some params</li>
        <li>some params</li>
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  console.log("Trigger: mSTP function (List component)");
  return {
    // data: state.counter.count
  };
};

const enhancer = () => {
  console.log("Trigger: connect function (List component)");
  return connect(mapStateToProps);
};

export const List = enhancer()(ListView);
