import styled from "styled-components";

const Wrapper = styled.div<{ index: number }>`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: ${(props) => (props.index - 2) * 195}px;

  @media screen and (max-width: 800px) {
    margin-top: 0;
    grid-column: span 2;
    padding-top: 20px;
  }
`;

const Card = styled.div`
  margin-left: 30px;
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

  @media screen and (max-width: 800px) {
    &:after {
      border-width: 0;
    }

    margin: 0 60px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin: 0 20px;
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
