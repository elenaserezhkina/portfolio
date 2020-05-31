import React from "react";
import styled from "styled-components";

const StackImage = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallStack = ({ stack }) => {
  return (
    <Container>
      {stack.map((el) => (
        <StackImage img={el.img}></StackImage>
      ))}
    </Container>
  );
};

export default SmallStack;
