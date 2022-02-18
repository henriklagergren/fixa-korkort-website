import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ index: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.index - 2) * 195}px;
`;

const Card = styled.div`
  margin: 0;
  width: 60%;
  border-radius: 10px;
  background: white;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  background: white;
  padding: 20px;
  transition: all 0.75s ease;
  filter: drop-shadow(0 0 8px #bbb9b9);

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    z-index: -1;
    border-style: solid;
    border-color: transparent white;
    border-width: 12px 21px 12px 0;
    top: 50%;
    left: -21px;
    margin-top: -12px;
    transition: all 0.75s ease;
  }

  &:hover {
    filter: drop-shadow(0 0 16px #bbb9b9);
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin: 0;
  padding: 0;
`;

const Body = styled.p``;

type props = {
  title: string;
  body: string;
  index: number;
};

const FeatureInfo = ({ title, body, index }: props) => {
  return (
    <Wrapper index={index} id="featureWrapper">
      <Card>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Card>
    </Wrapper>
  );
};

export default FeatureInfo;
