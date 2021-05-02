import React from "react";

import "./App.css";

import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Container from "./component/Container";

function App() {
  return (
    <Container>
      <Component1></Component1>
      <Component2></Component2>
    </Container>
  );
}

export default App;
