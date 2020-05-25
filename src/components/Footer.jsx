import React from "react";
import { Highlight } from "../pages/style";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
  padding: 5px;
  background-color: ${({ theme }) => theme.footer};
`;

const SmallParagraph = styled.p`
  font-size: 10px;
  margin: 0px;
  a {
    margin: 0;
    color: inherit;
  }
`;

const Footer = ({ theme }) => {
  return (
    <Container>
      <Highlight>Credits:</Highlight>
      <SmallParagraph>
        <b>Sun</b> icon made by{" "}
        <a href="https://www.flaticon.com/authors/smalllikeart">
          smalllikeart{" "}
        </a>
        from <a href="https://www.flaticon.com">www.flaticon.com</a>
      </SmallParagraph>
      <SmallParagraph>
        <b>Moon</b> icon made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik{" "}
        </a>
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </SmallParagraph>
    </Container>
  );
};

export default Footer;
