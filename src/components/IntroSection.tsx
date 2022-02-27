import styled from "styled-components";
import Mockup from "./../images/mockup.png";
import Icon from "./../images/app-icon.png";
import { ReactComponent as GooglePlayBadge } from "./../images/google_play_badge.svg";
import { ReactComponent as AppStoreBadge } from "./../images/app_store_badge.svg";
import { ReactComponent as Wave } from "./../images/wave.svg";
import { FaArrowDown as Arrow } from "react-icons/fa";
import { Link, animateScroll as Scroll } from "react-scroll";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MockupImage = styled.img`
  width: 280px;
  padding-right: 70px;
  z-index: 1;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const AppElement = styled.div`
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

const AppIcon = styled.img`
  width: 150px;
  border-radius: 25px;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  padding-top: 25px;
  font-size: 40px;
  margin: 0;
`;

const Body = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

const StoreButtons = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`;

const GooglePlayButton = styled(GooglePlayBadge)`
  padding-right: 5px;
  width: 170px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    width: 130px;
  }
`;

const AppStoreButton = styled(AppStoreBadge)`
  padding-left: 5px;
  width: 170px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 130px;
  }
`;

const ArrowDown = styled(Arrow)`
  position: absolute;
  bottom: 20%;
  left: 50%;
  z-index: 1;
  font-size: 40px;
  color: #083842;
  text-align: center;
  -moz-animation: bounce 4s infinite;
  -webkit-animation: bounce 4s infinite;
  animation: bounce 4s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const IntroSection = () => {
  return (
    <Container>
      <Wrapper>
        <MockupImage src={Mockup} />
        <AppElement>
          <AppIcon src={Icon} />
          <Title>Fixa Körkort</Title>
          <Body>Din väg till körkortet</Body>
          <StoreButtons>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?hl=sv&id=com.korkort"
            >
              <GooglePlayButton />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/SE/app/id1455678857"
            >
              <AppStoreButton />
            </a>
          </StoreButtons>
        </AppElement>
      </Wrapper>
      <Wave />
      <Link to="video" smooth={true} offset={-100}>
        <ArrowDown />
      </Link>
    </Container>
  );
};

export default IntroSection;
