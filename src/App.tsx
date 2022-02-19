import React from "react";
import styled from "styled-components";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Footer from "./components/Footer";
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
      <FeatureSection />
      <Footer />
    </Wrapper>
  );
};

export default App;
