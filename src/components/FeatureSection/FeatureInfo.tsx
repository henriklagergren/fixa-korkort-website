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
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Body = styled.p``;

type props = {
  title: string;
  body: string;
  index: number;
};

const FeatureInfo = ({ title, body, index }: props) => {
  console.log(index);
  return (
    <Wrapper index={index}>
      <Card>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Card>
    </Wrapper>
  );
};

export default FeatureInfo;
