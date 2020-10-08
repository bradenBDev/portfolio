import React from "react";
import { List } from "semantic-ui-react";

function MainItem({item, children }) {

  const bulletPoint = "•";

  return (
    <List.Item as="li" value={bulletPoint} style={{ fontSize: "1.33em" }}>
      {item || children}
    </List.Item>
  )
}

export default MainItem;