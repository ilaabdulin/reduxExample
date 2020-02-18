import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux-common/create-store";
import { List, Counter } from "./redux-common/components";
import { Wrapper } from "./ui/wrapper";
import "./styles.css";

const App = () => {
  console.log("Render: AppView component");
  return (
    <Wrapper>
      <Counter />
      <List />
    </Wrapper>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
