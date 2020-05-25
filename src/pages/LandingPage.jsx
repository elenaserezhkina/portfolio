import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from "../components/Toggle";
import Links from "../components/Links";
import ScrollDown from "../components/ScrollDown";

const ToggleContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const LandingPage = (props) => {
  return (
    <>
      <ToggleContainer>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </ToggleContainer>
      <h1>Hello, I am Olena and I build responsive websites.</h1>
      <Links />
      <ScrollDown theme={props.theme} />
    </>
  );
};

LandingPage.propTypes = {
  toggleTheme: PropTypes.func,
};

export default LandingPage;
