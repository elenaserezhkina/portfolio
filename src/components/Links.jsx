import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { BackgroundBlur } from "../pages/style";

const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  font-size: 65px;
  margin: 15px;
  @media only screen and (max-width: 500px) {
    font-size: 40px;
    margin: 9px;
    transition: all 0.3s linear;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
  }
  z-index: 2;
  position: relative;
`;

const Links = (props) => {
  return (
    <BackgroundBlur>
      <LinksContainer>
        <a
          href="https://github.com/elenaserezhkina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/olena-shutovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://drive.google.com/file/d/1FqIU6g-sYDT9wZTqqzsnaGANptQ6K20B/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
        <a
          href="mailto:o.shutovska@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/elenaserezhkina/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </LinksContainer>
    </BackgroundBlur>
  );
};

export default Links;
