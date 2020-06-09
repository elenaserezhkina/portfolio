import React from "react";
import styled from "styled-components";

const CardMedia = styled.div`
  min-height: 450px;
  max-height: 500px;
  width: 215px;
  border-radius: 30px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  @media only screen and (max-width: 600px) {
    transition: all 0.3s linear;
    min-height: 240px;
    width: 120px;
    border-radius: 20px;
  }
`;

const PhoneImage = styled.div`
  background-image: url("/phone.png");
  background-size: cover;
  position: absolute;
  left: -64px;
  right: -9px;
  bottom: -18px;
  top: -21px;

  @media only screen and (max-width: 600px) {
    transition: all 0.3s linear;
    left: -34px;
    right: -6px;
    bottom: -12px;
    top: -13px;
  }
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
