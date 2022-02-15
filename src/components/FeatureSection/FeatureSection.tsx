import { useState } from "react";
import styled from "styled-components";
import FeatureIconSwitcher from "./FeatureIconSwitcher";
import FeatureInfo from "./FeatureInfo";
import FeatureMockup from "./FeatureMockup";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FeatureSection = () => {
  const [currentIndex, setIndex] = useState(0);

  const onClick = (newIndex: number) => {
    setIndex(newIndex);
    console.log(newIndex);
  };

  return (
    <Wrapper>
      <FeatureMockup />
      <FeatureIconSwitcher
        currentIndex={currentIndex}
        onClick={(newIndex: number) => onClick(newIndex)}
      />
      <FeatureInfo />
    </Wrapper>
  );
};

export default FeatureSection;
