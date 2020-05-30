import React from "react";
import styled from "styled-components";

const CardMedia = styled.div`
  height: 310px;
  width: 165px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  @media only screen and (max-width: 500px) {
    transition: all 0.3s linear;
    height: 240px;
    width: 120px;
  }
`;

const PhoneImage = styled.div`
  background-image: url("/phone.png");
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const PhoneCard = ({ image, title }) => {
  return (
    <>
      <CardMedia image={image} title={title}>
        <PhoneImage />
      </CardMedia>
    </>
  );
};

export default PhoneCard;
