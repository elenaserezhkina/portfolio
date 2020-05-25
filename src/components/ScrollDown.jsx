import React from "react";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollContainer = styled.div`
  //   position: absolute;
  //   bottom: 1px;
  //   left: 50%;
`;
const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  font-size: 65px;
  @media only screen and (max-width: 500px) {
    font-size: 45px;
    transition: all 0.3s linear;
  }
`;

const ScrollDown = ({ theme }) => {
  return (
    <ScrollContainer>
      <FontAwesomeIcon
        icon={faAngleDoubleDown}
        color={theme === "light" ? "#ffc34d" : "#5769AD"}
      />
    </ScrollContainer>
  );
};

export default ScrollDown;
