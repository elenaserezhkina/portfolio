import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Toggle from "../components/Toggle";
import Links from "../components/Links";
import ScrollDown from "../components/ScrollDown";

import { PageContainer as _PageContainer, BackgroundBlur } from "./style";

const ToggleContainer = styled.div`
  display: flex;
  padding: 10px;
`;
const PageContainer = styled(_PageContainer)`
  // background-image: url("/background.svg");
  // background-size: cover;
`;

const BackgroundImage = styled.div`
  background-image: url("/6.svg");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-position: right;
  background-repeat: no-repeat;
`;

const MainHeader = styled.h1`
  z-index: 2;
  position: relative;
`;

const LandingPage = (props) => {
  return (
    <BackgroundImage>
      <PageContainer>
        <ToggleContainer>
          <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        </ToggleContainer>
        <BackgroundBlur>
          <MainHeader>
            Hello, I am Olena and I build responsive websites.
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
