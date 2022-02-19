import styled from "styled-components";
import { ReactComponent as GooglePlayBadge } from "./../images/google_play_badge.svg";
import { ReactComponent as AppStoreBadge } from "./../images/app_store_badge.svg";
import { ReactComponent as InstagramIcon } from "./../images/instagram.svg";

const Wrapper = styled.div`
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const GooglePlayButton = styled(GooglePlayBadge)`
  padding-right: 5px;
  width: 130px;
  cursor: pointer;
`;

const AppStoreButton = styled(AppStoreBadge)`
  padding-left: 5px;
  width: 130px;
  cursor: pointer;
`;

const InstagramButton = styled(InstagramIcon)`
  cursor: pointer;
  padding-right: 20px;
`;

const CompanyName = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <div>
          <GooglePlayButton
            target="_blank"
            href="https://play.google.com/store/apps/details?hl=sv&id=com.korkort"
          />
          <AppStoreButton
            target="_blank"
            href="https://apps.apple.com/SE/app/id1455678857"
          />
        </div>
        <InstagramButton
          target="_blank"
          href="https://www.instagram.com/fixakorkort/"
        />
      </FooterContent>
      <CompanyName target="_blank" href="https://devkey.se">
        © {new Date().getFullYear()} devkey Software
      </CompanyName>
    </Wrapper>
  );
};

export default Footer;
