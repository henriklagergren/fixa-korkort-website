import styled from "styled-components";
import FeatureIcon from "./FeatureIcon";
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
  onHover: Function;
  features: feature[];
};

const FeatureIconSwitcher = ({ currentIndex, onHover, features }: props) => {
  return (
    <Wrapper>
      {features.map((feature, index) => (
        <FeatureColumn id={index.toString()}>
          <FeatureIcon
            Icon={feature.icon}
            isActive={index == currentIndex}
            onHover={(onEnter: boolean) => onHover(index, onEnter)}
          />
          {index != features.length - 1 && <DottedLine />}
        </FeatureColumn>
      ))}
    </Wrapper>
  );
};

export default FeatureIconSwitcher;
