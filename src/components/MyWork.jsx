import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import React from "react";
import ProjectShowcaseItem from "./ProjectShowcaseItem";


function MyWork () {
  return (
    <div id="work">
      <Segment style={{ padding: "8em" }} vertical>
        <Grid divided columns="equal" stackable>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Header
                as="h1"
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  textAlign: "center",
                  padding: "0 0 1em"
                }}
              >
                My Work
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <ProjectShowcaseItem
                projectTitle={"Keeper"}
                projectDescription={"Note-taking app inspired by Google Keep."}
                githubURL={"https://github.com/bradenBDev/Keeper-App"}
                finishedURL={"https://bradenbdev.github.io/Keeper-App/"}
              />
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <ProjectShowcaseItem
                projectTitle={"Secrets"}
                projectDescription={"An anonymous place to spill all of your beans."}
                githubURL={"https://github.com/bradenBDev/Secrets-Website"}
                finishedURL={"https://bradenb-secrets-app.herokuapp.com"}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <ProjectShowcaseItem
                projectTitle={"Todo List"}
                projectDescription={"Keep track of your day."}
                githubURL={"https://github.com/bradenBDev/Keeper-App"}
                finishedURL={"https://bradenbdev.github.io/Keeper-App/"}
              />
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <ProjectShowcaseItem
                projectTitle={"This Site, Of Course"}
                projectDescription={"Built with React."}
                githubURL={"https://github.com/bradenBDev/Secrets-Website"}
                finishedURL={""}
                popupContent={{github: null, website: "You're already here!"}}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default MyWork;