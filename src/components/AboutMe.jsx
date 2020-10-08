import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import profilePicture from "../images/profile-picture.jpg";


function AboutMe () {
  return (
    <div id="about">
      <Segment style={{ padding: "8em 0" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header
                as="h1"
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  textAlign: "center"
                }}
              >
                About Me
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Eager To Learn
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                I'm a Utah-based web developer with a passion for programming and learning.
                I've always had an interest in technology, and over the years,
                I've taught myself digital music production, video editing, and for the past
                three years, programming. I am always searching for a new opportunity to learn and to create
                something awesome.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Passionate & Motivated
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Since taking my first programming course in high school, I have been in
                love with programming. I've worked on many personal projects and have
                greatly diversified my skill set. Check out some of my most recent work below!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image circular size="large" src={profilePicture}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default AboutMe;