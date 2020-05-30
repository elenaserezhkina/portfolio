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
      <SmallParagraph>
        <a href="https://icons8.com/icon/gFw7X5Tbl3ss/material-ui">
          Material Ui icon by Icons8
        </a>
      </SmallParagraph>
      <SmallParagraph>
        <a href="https://icons8.com/icon/54087/nodejs">Nodejs icon by Icons8</a>
      </SmallParagraph>

      <SmallParagraph>
        <a href="https://icons8.com/icon/QBqFNfPPB2Kx/sass">
          Sass icon by Icons8
        </a>
      </SmallParagraph>
      <SmallParagraph>
        <a href="https://icons8.com/icon/21278/css3">CSS3 icon by Icons8</a>
      </SmallParagraph>
      <SmallParagraph>
        <a href="https://icons8.com/icon/123603/react-native">
          React Native icon by Icons8
        </a>
      </SmallParagraph>

      <SmallParagraph>
        <a href="https://icons8.com/icon/74402/mongodb">
          MongoDB icon by Icons8
        </a>
      </SmallParagraph>
      <SmallParagraph>
        <a href="https://icons8.com/icon/jD-fJzVguBmw/redux">
          Redux icon by Icons8
        </a>
      </SmallParagraph>
      <SmallParagraph></SmallParagraph>
      <SmallParagraph></SmallParagraph>
      <SmallParagraph></SmallParagraph>
      <SmallParagraph></SmallParagraph>
    </Container>
  );
};

export default Footer;
