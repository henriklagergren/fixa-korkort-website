import styled from "styled-components";
import FeatureIcon from "./FeatureIcon";
import { ReactComponent as Quiz } from "./../../images/feature_icons/quiz.svg";
import { ReactComponent as Book } from "./../../images/feature_icons/book.svg";
import { ReactComponent as Important } from "./../../images/feature_icons/important.svg";
import { ReactComponent as Stats } from "./../../images/feature_icons/stats.svg";
import { ReactComponent as TrafficLight } from "./../../images/feature_icons/traffic_light.svg";
import feature from "../../types/feature";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DottedLine = styled.div`
  border-left: 1.5px dashed #d6d6d6;
  height: 30px;
`;

const FeatureColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

type props = {
  currentIndex: number;
  onClick: Function;
  features: feature[];
};

const FeatureIconSwitcher = ({ currentIndex, onClick, features }: props) => {
  return (
    <Wrapper>
      {features.map((feature, index) => (
        <FeatureColumn id={index.toString()}>
          <FeatureIcon
            Icon={feature.icon}
            isActive={index == currentIndex}
            onClick={() => onClick(index)}
          />
          {index != features.length - 1 && <DottedLine />}
        </FeatureColumn>
      ))}
    </Wrapper>
  );
};

export default FeatureIconSwitcher;
