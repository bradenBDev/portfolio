import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Label,
} from "semantic-ui-react";
import React from "react";


function Footer () {
  return (
    <div id="contact">
      <Segment inverted style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row textAlign={"center"}>
              <Grid.Column stretched>
                <Header as="h4" inverted>
                  Contact Me
                </Header>
                <Grid centered style={{ padding: "2em 0" }}>
                  <Label style={{ fontSize: 15, fontWeight: "normal" }}
                         color="black">
                    <Icon name="address book outline" style={{ fontSize: 18 }}/>
                    Braden Baird
                  </Label>
                  <Label as={"a"} href="mailto:bradenbdev@gmail.com"
                         style={{ fontSize: 15, fontWeight: "normal" }}
                         color="black">
                    <Icon name="mail" style={{ fontSize: 18 }}/>
                    bradenbdev@gmail.com
                  </Label>
                  <Label style={{ fontSize: 15, fontWeight: "normal" }}
                         color="black">
                    <Icon flipped="horizontally" name="phone"
                          style={{ fontSize: 18 }}/>
                    +1 (435) 899-0402
                  </Label>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;