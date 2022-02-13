import styled from "styled-components";
import Mockup from "./../images/mockup.png";
import Icon from "./../images/app-icon.png";
import { ReactComponent as GooglePlayBadge } from "./../images/google_play_badge.svg";
import { ReactComponent as AppStoreBadge } from "./../images/app_store_badge.svg";
import { ReactComponent as Wave } from "./../images/wave.svg";

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
`;

const AppElement = styled.div`
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppIcon = styled.img`
  width: 150px;
  border-radius: 25px;
`;

const Title = styled.h1``;

const Body = styled.h2``;

const StoreButtons = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
`;

const GooglePlayButton = styled(GooglePlayBadge)`
  padding-right: 5px;
  max-width: 100%;
`;

const AppStoreButton = styled(AppStoreBadge)`
  padding-left: 5px;
  height: 100%;
  max-width: 100%;
`;

const WaveDivider = styled(Wave)`
  position: fixed;
  bottom: 0;
`;

const IntroSection = () => {
  return (
    <div>
      <Wrapper>
        <MockupImage src={Mockup} />
        <AppElement>
          <AppIcon src={Icon} />
          <Title>Fixa Körkort</Title>
          <Body>Din väg till körkortet</Body>
          <StoreButtons>
            <GooglePlayButton />
            <AppStoreButton />
          </StoreButtons>
        </AppElement>
      </Wrapper>
      <WaveDivider />
    </div>
  );
};

export default IntroSection;
