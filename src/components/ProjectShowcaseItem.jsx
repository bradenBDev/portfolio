import { Header } from "semantic-ui-react";
import React from "react";
import IconLink from "./IconLink";


function ProjectShowcaseItem ({ projectTitle, projectDescription, githubURL, finishedURL, popupContent }) {

  if (popupContent === undefined) popupContent = false;

  return (
    <div>
      <Header as="h3" style={{ fontSize: "2em" }}>
        {projectTitle}
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        {projectDescription}
      </p>
      <div style={{ marginTop: "2em" }}>
        <IconLink
          content={!popupContent.github
            ? "Check out this project on GitHub"
            : popupContent.github}
          url={githubURL}
          iconName="github"
        />
        <IconLink
          content={!popupContent.website
            ? "Go to the finished product"
            : popupContent.website}
          url={finishedURL}
          iconName="globe"
        />
      </div>
    </div>
  );
}

export default ProjectShowcaseItem;