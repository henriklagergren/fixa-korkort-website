import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  width: 30%;
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2``;

const Body = styled.p``;

const FeatureInfo = () => {
  return (
    <Wrapper>
      <Title>Över 870st körkortsfrågor</Title>
      <Body>
        Öva på hundratals olika körkortsfrågor med tillhörande förklaring,
        uppdelade i olika kategorier. Välj storleken på proven och olika sätt
        att plugga på!
      </Body>
    </Wrapper>
  );
};

export default FeatureInfo;
