import "./App.css";
import React from "react";
import styled from "styled-components";

import Signup from "./component/Signup";
import Login from "./component/Login";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50vh;
`;
const Blank = styled.div`
  height: 20px;
`;
function App() {
  return (
    <Container>
      <FormWrapper>
        <Signup></Signup>
        <Blank></Blank>
        <Login></Login>
      </FormWrapper>
    </Container>
  );
}

export default App;
