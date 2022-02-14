import styled from "styled-components";
import FeatureIcon from "./FeatureIcon";
import { ReactComponent as Quiz } from "./../../images/feature_icons/quiz.svg";
import { ReactComponent as Book } from "./../../images/feature_icons/book.svg";
import { ReactComponent as Important } from "./../../images/feature_icons/important.svg";
import { ReactComponent as Stats } from "./../../images/feature_icons/stats.svg";
import { ReactComponent as TrafficLight } from "./../../images/feature_icons/traffic_light.svg";
import { useState } from "react";

const Wrapper = styled.div``;

const FeatureIconSwitcher = () => {
  const [currentIndex, setIndex] = useState(0);

  const onClick = (newIndex: number) => {
    setIndex(newIndex);
    console.log(newIndex);
  };

  return (
    <Wrapper>
      <FeatureIcon
        Icon={Quiz}
        isActive={0 == currentIndex}
        onClick={() => onClick(0)}
      />
      <FeatureIcon
        Icon={TrafficLight}
        isActive={1 == currentIndex}
        onClick={() => onClick(1)}
      />
      <FeatureIcon
        Icon={Book}
        isActive={2 == currentIndex}
        onClick={() => onClick(2)}
      />
      <FeatureIcon
        Icon={Important}
        isActive={3 == currentIndex}
        onClick={() => onClick(3)}
      />
      <FeatureIcon
        Icon={Stats}
        isActive={4 == currentIndex}
        onClick={() => onClick(4)}
      />
    </Wrapper>
  );
};

export default FeatureIconSwitcher;
