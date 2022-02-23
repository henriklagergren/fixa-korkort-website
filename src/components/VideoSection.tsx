import styled from "styled-components";
import ReactPlayer from "react-player";
import { ReactComponent as Wave } from "./../images/waveTwo.svg";

const Wrapper = styled.div`
  background-color: #1bbbdf;
  height: 500px;
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.iframe`
  display: block;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 64%;
  height: 90%;
  border: none;
`;

const WaveDivider = styled(Wave)``;

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
