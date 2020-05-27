import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Toggle from "../components/Toggle";
import Links from "../components/Links";
import ScrollDown from "../components/ScrollDown";

import { PageContainer, BackgroundBlur, Highlight } from "./style";
import TextScroller from "../components/TextScroller";

const ToggleContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const BackgroundImage = styled.div`
  background-image: url("/6.svg");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-position: right;
  background-repeat: no-repeat;
`;
const TechContainer = styled.div`
  color: ${({ theme }) => theme.highlight};
`;

const MainHeader = styled.h1`
  z-index: 2;
  position: relative;
`;

const techStack = [
  "React",
  "Redux",
  "SCSS",
  "Material UI",
  "Styled Components",
  "Node.js",
  "Express",
  "Mongoose",
];

const LandingPage = (props) => {
  return (
    <BackgroundImage>
      <PageContainer>
        <ToggleContainer>
          <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        </ToggleContainer>
        <BackgroundBlur>
          <MainHeader>
            Hello, I am <Highlight>Olena</Highlight> <br />
            and I build responsive websites with
            <br />
            <Highlight>
              <TextScroller items={techStack} />
            </Highlight>
          </MainHeader>
        </BackgroundBlur>
        <Links theme={props.theme} />
        <ScrollDown theme={props.theme} nextPage={() => props.onClick(1)} />
      </PageContainer>
    </BackgroundImage>
  );
};

LandingPage.propTypes = {
  toggleTheme: PropTypes.func,
};

export default LandingPage;
