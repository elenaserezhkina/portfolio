import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as GhostIcon } from "./images/ghost.svg";
import { ReactComponent as SunIcon } from "./images/sun.svg";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 7rem;
  height: 3, 5rem;
  @media only screen and (max-width: 550px) {
    width: 6rem;
    height: 3rem;
    transition: all 0.3s linear;
  }

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    @media only screen and (max-width: 550px) {
      width: 2rem;
    }

    // sun icon
    &:first-child {
      transform: ${({ isLight }) =>
        isLight ? "translateY(0)" : "translateY(100px)"};
    }

    // ghost icon
    &:nth-child(2) {
      transform: ${({ isLight }) =>
        isLight ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer isLight={isLight} onClick={toggleTheme}>
      <SunIcon />
      <GhostIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
