import {
  Grid,
  Header, Image, List,
  Segment, Visibility,
} from "semantic-ui-react";
import React from "react";
import MainItem from "./MainItem";
import SubItem from "./SubItem";


function MySkills ({ handleScroll }) {
  return (
    <div id="skills">
      <Segment style={{ padding: "8em" }} vertical>
        <Grid columns="equal" divided container stackable>

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
                My Skills
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Front End Development
              </Header>

              <List as="ol">
                <MainItem>
                  Javascript
                  <List.Item as="ol">
                    <SubItem item="React.js" />
                    <SubItem item="jQuery" />
                  </List.Item>
                </MainItem>
                <MainItem>
                  HTML & CSS
                  <List.Item as="ol">
                    <SubItem item="Bootstrap" />
                  </List.Item>
                </MainItem>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Back End Development
              </Header>
              <List as="ol">
                <MainItem>
                  Node.js
                  <List.Item as="ol">
                    <SubItem item="Express.js" />
                    <SubItem item="Passport.js" />
                    <SubItem item="EJS" />
                  </List.Item>
                </MainItem>
                <MainItem>
                  Python
                  <List.Item as="ol">
                    <SubItem item="Flask" />
                  </List.Item>
                </MainItem>
                <MainItem>
                  MongoDB
                  <List.Item as={"ol"}>
                    <SubItem item="Mongoose" />
                  </List.Item>
                </MainItem>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Personal Skills
              </Header>
              <List as="ol">
                <MainItem item="Able to work well with others" />
                <MainItem item="Adaptable & quick-learning" />
                <MainItem item="" />
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default MySkills;