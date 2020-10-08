import React, { useState } from "react";
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";


function MobileContainer ({ children }) {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };

  const handleToggle = () => {
    setSidebarOpened(true);
  };

    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <NavbarItem name="home" id="homeNavItem" to="home" innerText="Home" onClick={handleSidebarHide} />
            <NavbarItem name="about" id="aboutNavItem" to="about" innerText="About" onClick={handleSidebarHide} />
            <NavbarItem name="work" id="workNavItem" to="work" innerText="My Work" onClick={handleSidebarHide} />
            <NavbarItem name="contact" id="contactNavItem" to="contact" innerText="Contact Me" onClick={handleSidebarHide} />
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 100, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;