import styled from "styled-components";
import IphoneImg from "./../../images/mockups/oneplus.png";

const Wrapper = styled.div`
  height: 500px;
`;

const Iphone = styled.img`
  height: 100%;
`;

const Mockup = styled.a<{ src: string }>`
  height: 67%;
  width: 100%;
  margin-left: 4px;
  margin-top: 9px;
  position: absolute;
  z-index: -1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
  -moz-transition: background-image 0.3s ease-in-out;
  -webkit-transition: background-image 0.3s ease-in-out;
  -o-transition: background-image 0.3s ease-in-out;
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
