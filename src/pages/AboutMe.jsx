import React from "react";
// import PropTypes from 'prop-types';
import CardContent from "@material-ui/core/CardContent";
import _Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { BigImage, Card as _Card, Highlight, PageContainer } from "./style";
import ScrollDown from "../components/ScrollDown";

const Container = styled.div`
  display: flex;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Card = styled(_Card)`
  width: 60%;
  margin-left: 5px;
  max-width: 700px;
  height: 100%;
  min-height: 400px;
  @media only screen and (max-width: 700px) {
    width: 95%;
    margin: 0 auto;
    margin-left: auto;
    transition: all 0.3s linear;
  }
`;
const Typography = styled(_Typography)`
  font-size: 20px;
  padding-bottom: 10px;

  @media only screen and (min-width: 500px) and (max-width: 800px) {
    padding-bottom: 8px;
    &.MuiTypography-body1 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding-bottom: 5px;
    &.MuiTypography-body1 {
      font-size: 14px;
    }
  }
`;

const AboutMe = (props) => {
  return (
    <PageContainer>
      <h1 id="about">About me</h1>
      <Container>
        <Card>
          <CardContent>
            <Typography>
              In the middle of 2019, I’ve challenged myself to become a{" "}
              <Highlight>Web Developer</Highlight>{" "}
              <span role="img" aria-label="woman in front of computer">
                👩‍💻
              </span>
              .
            </Typography>
            <Typography>
              After a few months, of <Highlight>self-studying</Highlight>, I won
              a scholarship at Wild Code School and immediately enrolled for a{" "}
              <Highlight>5-month Fullstack WebDev course</Highlight>. It was a
              great time with a mixture of in-class and online learning, dojos
              and online challenges, workshops, hackathons and lots of projects
              where I gained important tech skills, used SCRUM agile methodology
              with my team, and got experience working with a client (Workademy)
              under WCS.
            </Typography>
            <Typography>
              <span role="img" aria-label="computer emojis">
                💻
              </span>{" "}
              Technologies used: JavaScript, HTML5, CSS3, Styled Components,
              Bootstrap, ReactJS, Material UI, Node.js, Express.js, MySQL, Git,
              Figma etc.
            </Typography>
            <Typography>
              I enjoy solving challenges, learning something new, and I am
              looking for opportunities to further develop my programming
              skills. I want to find and contribute to the project that I would
              be passionate about.
            </Typography>
          </CardContent>
        </Card>
        <BigImage></BigImage>
      </Container>
      <ScrollDown theme={props.theme} id="projects" />
    </PageContainer>
  );
};

export default AboutMe;
