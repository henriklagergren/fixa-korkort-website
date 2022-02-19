import styled from "styled-components";

const Wrapper = styled.div``;

const RoundIcon = styled.div<{ isActive: boolean }>`
  padding: 20px;
  background-color: ${(props) => (props.isActive ? "#1bbbdf" : "white")};
  border-radius: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

type props = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  isActive: boolean;
  onHover: Function;
};

const FeatureIcon = ({ Icon, isActive, onHover }: props) => {
  return (
    <Wrapper>
      <RoundIcon
        isActive={isActive}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <Icon filter={isActive ? "invert(100%)" : "none"} />
      </RoundIcon>
    </Wrapper>
  );
};

export default FeatureIcon;
