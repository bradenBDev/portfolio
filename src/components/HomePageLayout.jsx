import React from "react";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Footer from "./Footer";
import HomepageHeading from "./HomePageHeading";
import { createMedia } from "@artsy/fresnel";
import DesktopContainer from "./DesktopContainer";
import { Sidebar } from "semantic-ui-react";
import MobileContainer from "./MobileContainer";
import ScrollAnimation from "react-animate-on-scroll";


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

function HomepageLayout () {
  return (
    <div>
      <MediaContextProvider>
        <Media greaterThan="mobile">
          <DesktopContainer><HomepageHeading/></DesktopContainer>
        </Media>
        <Media as={Sidebar.Pushable} at="mobile">
          <MobileContainer><HomepageHeading mobile /></MobileContainer>
        </Media>
      </MediaContextProvider>
      <ScrollAnimation animateIn="fadeIn" delay={150}>
        <AboutMe />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={150}>
        <MyWork />
      </ScrollAnimation>
      <Footer />
    </div>
)}

export default HomepageLayout;