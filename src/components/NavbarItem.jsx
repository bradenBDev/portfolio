import React from "react";
import { Link } from "react-scroll";
import { Menu } from "semantic-ui-react";


function NavbarItem ({ name, id, to, innerText }) {
  return (
    <Menu.Item name={name} id={id} link
               as={Link}
               to={to}
               spy={false}
               smooth="easeOutQuint"
               offset={-43}
               duration={1500}
    >
      {innerText}
    </Menu.Item>
  );
}

export default NavbarItem;