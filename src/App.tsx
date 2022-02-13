import React from "react";
import styled from "styled-components";
import IntroSection from "./components/IntroSection";
import VideoSection from "./components/VideoSection";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Wrapper>
      <IntroSection />
      <VideoSection />
    </Wrapper>
  );
};

export default App;
