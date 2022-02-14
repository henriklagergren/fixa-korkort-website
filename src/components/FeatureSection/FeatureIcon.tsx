import { useState, FunctionComponent, SVGProps } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

const RoundIcon = styled.div<{ isActive: boolean }>`
  padding: ${(props) => (props.isActive ? "12px" : "10px")};
  background-color: ${(props) => (props.isActive ? "#1bbbdf" : "white")};
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
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
  onClick: Function;
};

const FeatureIcon = ({ Icon, isActive, onClick }: props) => {
  return (
    <Wrapper>
      <RoundIcon isActive={isActive} onClick={() => onClick()}>
        {" "}
        <Icon />
      </RoundIcon>
    </Wrapper>
  );
};

export default FeatureIcon;
