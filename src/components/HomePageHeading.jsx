import React from "react";
import {
  Button,
  Container,
  Header,
  Segment
} from "semantic-ui-react";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";


function HomepageHeading ({mobile}) {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: mobile ? 500 : 725, padding: "0" }}
      vertical
    >
      <Container text style={{padding: "4em 0"}}>
        <ScrollAnimation animateIn="fadeIn" delay={150}>
          <Header
            as="h3"
            content="Hi, I'm Braden Baird."
            inverted
            style={{
              fontSize: mobile ? "1.1em" : "1.9em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em",
            }}
          />
          <Header
            as="h1"
            content="Junior Developer & Programmer"
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
            }}
          />
          <Header
            as="h2"
            content="Motivated self-starter with a keen eye for detail."
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
              marginBottom: mobile ? "0.5em" : "1.5em"
            }}
          />
          <Button primary size="huge"
                  as={Link}
                  to="contact"
                  spy={false}
                  smooth="easeOutQuint"
                  offset={-43}
                  duration={1500}>
            Get In Touch
          </Button>
        </ScrollAnimation>
      </Container>
    </Segment>
)}

export default HomepageHeading;