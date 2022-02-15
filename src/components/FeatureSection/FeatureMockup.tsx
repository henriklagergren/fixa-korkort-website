import styled from "styled-components";
import Mockup from "./../../images/mockups/1.png";

const Wrapper = styled.img`
  height: 300px;
`;

const FeatureMockup = () => {
  return <Wrapper src={Mockup} />;
};

export default FeatureMockup;
