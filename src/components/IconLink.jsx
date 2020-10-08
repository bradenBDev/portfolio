import { Icon, Popup } from "semantic-ui-react";
import React from "react";


function IconLink ({ content, url, iconName }) {
  return (
    <Popup
      offset={[2, 15]}
      content={content}
      trigger={
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon
            style={{ fontSize: 38, color: "rgba(0,0,0,.87)" }}
            name={iconName}
            link/>
        </a>}
    />
  );
}

export default IconLink;