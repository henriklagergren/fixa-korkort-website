import { useEffect, useState } from "react";
import styled from "styled-components";
import FeatureIconSwitcher from "./FeatureIconSwitcher";
import FeatureInfo from "./FeatureInfo";
import MockupOne from "./../../images/mockups/1.png";
import MockupTwo from "./../../images/mockups/2.png";
import MockupThree from "./../../images/mockups/3.png";
import MockupFour from "./../../images/mockups/4.png";
import MockupFive from "./../../images/mockups/5.png";
import { ReactComponent as Quiz } from "./../../images/feature_icons/quiz.svg";
import { ReactComponent as Book } from "./../../images/feature_icons/book.svg";
import { ReactComponent as Important } from "./../../images/feature_icons/important.svg";
import { ReactComponent as Stats } from "./../../images/feature_icons/stats.svg";
import { ReactComponent as TrafficLight } from "./../../images/feature_icons/traffic_light.svg";
import FeatureMockup from "./FeatureMockup";
import feature from "../../types/feature";

const Wrapper = styled.div`
  margin: 0 5%;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 64px 1fr;
  justify-items: center;
  align-items: center;
`;

const features: feature[] = [
  {
    icon: Quiz,
    title: "Över 870st körkortsfrågor",
    body: "Öva på hundratals olika körkortsfrågor med tillhörande förklaring, uppdelade i olika kategorier. Välj storleken på proven och olika sätt att plugga på!",
    mockup: MockupOne,
  },
  {
    icon: TrafficLight,
    title: "Vägmärkestest",
    body: "Öva på vägmärken genom att ta utmanande vägmärkestest. Tävla mot dig själv och se hur många poäng du kan få.",
    mockup: MockupTwo,
  },
  {
    icon: Book,
    title: "Hela teoriboken",
    body: "Hela teoriboken uppdelade i lättlästa kapitel och ett prov kopplat till varje kapitel.",
    mockup: MockupFour,
  },
  {
    icon: Important,
    title: "Viktiga ord",
    body: "Träna på viktiga ord med hjälp av frågekort.",
    mockup: MockupThree,
  },
  {
    icon: Stats,
    title: "Din statistik",
    body: "Se din statistik över hur du har presterat och håll full koll genom checklistan.",
    mockup: MockupFive,
  },
];

const FeatureSection = () => {
  const [currentIndex, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  var currentTimerId: NodeJS.Timeout;

  const onHover = (index: number, onEnter: boolean) => {
    if (onEnter) {
      clearTimeout(currentTimerId);
      setAutoPlay(false);
      setIndex(index);
    } else if (!onEnter) {
      currentTimerId = setTimeout(() => {
        setAutoPlay(true);
        setIndex((index + 1) % features.length);
      }, 2000);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      currentTimerId = setTimeout(() => {
        setIndex((currentIndex + 1) % features.length);
      }, 2000);
    }
  }, [currentIndex]);

  return (
    <Wrapper>
      <FeatureMockup mockup={features[currentIndex].mockup} />
      <FeatureIconSwitcher
        features={features}
        currentIndex={currentIndex}
        onHover={(newIndex: number, onEnter: boolean) =>
          onHover(newIndex, onEnter)
        }
      />
      <FeatureInfo
        index={currentIndex}
        title={features[currentIndex].title}
        body={features[currentIndex].body}
      />
    </Wrapper>
  );
};

export default FeatureSection;
