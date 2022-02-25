import styled from "styled-components";
import FeatureIcon from "./FeatureIcon";
import feature from "../../types/feature";

const Wrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: start;
  }
`;

const FeaturesSwitcher = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 25px;
  }
`;

const DottedLine = styled.div`
  border-left: 1.5px dashed #d6d6d6;
  height: 30px;

  @media screen and (max-width: 800px) {
    height: 15px;
  }
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
      <FeaturesSwitcher>
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
      </FeaturesSwitcher>
    </Wrapper>
  );
};

export default FeatureIconSwitcher;
