import React from "react";
import styled from "styled-components";

const Github = styled.div`
  height: 35px;
  background-color: #919191b8;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  text-align: center;
`;
const Demo = styled.div`
  height: 35px;
  background-color: #81c783b8;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  text-align: center;
`;

const Container = styled.div`
  width: 270px;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const ProjectLinks = ({ demo, github, event }) => {
  return (
    <Container>
      {demo && (
        <a href={demo}>
          <Demo>See the Demo > </Demo>
        </a>
      )}
      {github && (
        <a href={github}>
          <Github>Github</Github>
        </a>
      )}
      {event && (
        <a href={event}>
          <Demo>Event link ></Demo>
        </a>
      )}
    </Container>
  );
};

export default ProjectLinks;
