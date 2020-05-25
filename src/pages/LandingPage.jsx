import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../components/Toggle";
import Links from "../components/Links";

const ScrollContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  // align-items: flex-end;
`;
const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  font-size: 65px;
  @media only screen and (max-width: 500px) {
    font-size: 45px;
    transition: all 0.3s linear;
  }
`;

const LandingPage = (props) => {
  return (
    <>
      <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      <h1>Hello, I am Olena and I build responsive websites.</h1>
      <Links />
      <ScrollContainer>
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          color={props.theme === "light" ? "#ffc34d" : "#5769AD"}
        />
      </ScrollContainer>
    </>
  );
};

LandingPage.propTypes = {
  toggleTheme: PropTypes.func,
};

export default LandingPage;
