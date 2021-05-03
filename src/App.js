import React from "react";

import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Container from "./component/Container";

function App() {
  return (
    <Container>
      <ErrorBoundary>
        <Component1 />
      </ErrorBoundary>
      <Component2 />
    </Container>
  );
}

export default App;
