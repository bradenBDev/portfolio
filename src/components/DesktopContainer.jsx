import React from "react";
import { Container, Menu, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";


function DesktopContainer ({children}) {
    return (
      <div id={"home"}>
        <Segment
          inverted
          textAlign="center"
          vertical
        >
          <Menu
            fixed={"top"}
            inverted
            size="large"
          >
            <Container>
              <NavbarItem name="home" id="homeNavItem" to="home" innerText="Home" />
              <NavbarItem name="about" id="aboutNavItem" to="about" innerText="About" />
              <NavbarItem name="work" id="workNavItem" to="work" innerText="My Work" />
              <NavbarItem name="contact" id="contactNavItem" to="contact" innerText="Contact Me" />
            </Container>
          </Menu>
        </Segment>
        {children}
      </div>
    )
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;