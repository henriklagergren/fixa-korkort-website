import styled from "styled-components";
import IphoneImg from "./../../images/mockups/oneplus.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

  @media screen and (max-width: 400px) {
    padding-right: 25px;
  }
`;

const Iphone = styled.img`
  height: 600px;

  @media screen and (max-width: 800px) {
    height: 325px;
  }
`;

const Mockup = styled.a<{ src: string }>`
  height: 580px;
  width: 100%;
  margin-left: 4px;
  margin-top: 9px;
  position: absolute;
  z-index: -1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
  -moz-transition: background-image 0.3s ease-in-out;
  -webkit-transition: background-image 0.3s ease-in-out;
  -o-transition: background-image 0.3s ease-in-out;

  @media screen and (max-width: 800px) {
    height: 310px;
  }
`;

type props = {
  mockup: string;
};

const FeatureMockup = ({ mockup }: props) => {
  return (
    <Wrapper>
      <Mockup src={mockup} />
      <Iphone src={IphoneImg}></Iphone>
    </Wrapper>
  );
};

export default FeatureMockup;
