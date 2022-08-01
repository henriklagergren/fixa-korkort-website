import styled from "styled-components";
import { ReactComponent as Wave } from "./../images/waveTwo.svg";

const Wrapper = styled.div`
  background-color: #1bbbdf;
  padding: 0 250px;
  margin-top: -10px;

  @media screen and (max-width: 1200px) {
    padding: 0 150px;
  }

  @media screen and (max-width: 600px) {
    padding: 30px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: none;
`;

const WaveDivider = styled(Wave)`
  margin-top: -2px;
`;

const VideoSection = () => {
  return (
    <div>
      <Wrapper>
        <VideoWrapper id="video">
          <Video
            title="Video"
            src="https://www.youtube.com/embed/SWcoBQTbvsQ"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></Video>
        </VideoWrapper>
      </Wrapper>
      <WaveDivider />
    </div>
  );
};

export default VideoSection;
