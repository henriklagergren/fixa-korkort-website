import React from "react";
import styled from "styled-components";
import IntroSection from "./components/IntroSection";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Wrapper>
      <IntroSection />
    </Wrapper>
  );
};

export default App;
