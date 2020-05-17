import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  font-size: 65px;
  margin: 15px;
  @media only screen and (max-width: 500px) {
    font-size: 45px;
    transition: all 0.3s linear;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
  margin: 25px auto;
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

const Links = (props) => {
  return (
    <div>
      <LinksContainer>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFileAlt} />
        <FontAwesomeIcon icon={faAt} />
        <FontAwesomeIcon icon={faInstagram} />
      </LinksContainer>
    </div>
  );
};

Links.propTypes = {};

export default Links;
