import React from "react";
// import PropTypes from 'prop-types';
import CardContent from "@material-ui/core/CardContent";
import _Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import {
  Container,
  BigImage,
  Card as _Card,
  Highlight,
  PageContainer,
} from "./style";
import Footer from "../components/Footer";

const Card = styled(_Card)`
  width: 60%;
  margin-left: 5px;
  max-width: 700px;
  height: 100%;
  min-height: 350px;
  @media only screen and (max-width: 700px) {
    width: 95%;
    margin: 0 auto;
    margin-left: auto;
    transition: all 0.3s linear;
  }
`;
const Typography = styled(_Typography)`
  font-size: 20px;
  @media only screen and (max-width: 500px) {
    &.MuiTypography-body1 {
      font-size: 15px;
    }
  }
`;

const AboutMe = (props) => {
  return (
    <PageContainer>
      <h1>About me here</h1>
      <Container>
        <Card>
          <CardContent>
            <Typography variant="body1" component="p">
              In the middle of 2019, I’ve challenged myself to become a{" "}
              <Highlight>Web Developer</Highlight> and started to learn
              programming by myself 👩‍💻.
              <br />
              After a few months, of <Highlight>self-studying</Highlight>, I won
              a scholarship at Wild Code School and immediately enrolled for a{" "}
              <Highlight>5-month Fullstack WebDev course</Highlight>. It was a
              great time during which I had a mixture of in-class and online
              learning, dojos and online challenges, attended workshops, 2
              hackathons and worked on 3 projects. I gained lots of important
              tech skills, used SCRUM agile methodology with my team, and got
              experience working with a client on a real project.
              <br />
              <br />
              💻 Technologies used: JavaScript, HTML5, CSS3, Bootstrap, ReactJS,
              Material UI, Node.js, Express.js, MySQL, Git, Figma etc.
            </Typography>
          </CardContent>
        </Card>
        <BigImage></BigImage>
      </Container>
      <Footer theme={props.theme} />
    </PageContainer>
  );
};

export default AboutMe;
