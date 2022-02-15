import styled from "styled-components";
import FeatureIcon from "./FeatureIcon";
import { ReactComponent as Quiz } from "./../../images/feature_icons/quiz.svg";
import { ReactComponent as Book } from "./../../images/feature_icons/book.svg";
import { ReactComponent as Important } from "./../../images/feature_icons/important.svg";
import { ReactComponent as Stats } from "./../../images/feature_icons/stats.svg";
import { ReactComponent as TrafficLight } from "./../../images/feature_icons/traffic_light.svg";
import FeatureInfo from "./FeatureInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DottedLine = styled.div`
  border-left: 1.5px dashed black;
  height: 30px;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const FeatureColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const IconMap = [Quiz, TrafficLight, Book, Important, Stats];

type props = {
  currentIndex: number;
  onClick: Function;
};

const FeatureIconSwitcher = ({ currentIndex, onClick }: props) => {
  return (
    <Wrapper>
      {IconMap.map((item, index) => (
        <FeatureColumn>
          <FeatureIcon
            Icon={item}
            isActive={index == currentIndex}
            onClick={() => onClick(index)}
          />
          {index != IconMap.length - 1 && <DottedLine />}
        </FeatureColumn>
      ))}
    </Wrapper>
  );
};

export default FeatureIconSwitcher;
