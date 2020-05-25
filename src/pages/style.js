import _Card from "@material-ui/core/Card";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Button as _Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
`;
export const ProjectsPreview = styled.div`
  width: 40%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 825px) {
    display: none;
    transition: all 0.3s linear;
  }
`;
export const ProjectsDescription = styled.div`
  width: 60%;
  padding: 5px;
  margin: 0 auto;
  @media only screen and (max-width: 825px) {
    width: 95%;
    transition: all 0.3s linear;
  }
`;
export const Card = styled(_Card)`
  &.MuiPaper-root {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.card};
  }
`;
export const SmallCard = styled(Card)`
  width: 150px;
  margin: 0 5px 5px 5px;
  height: 130px;
  > h2 {
    font-size: 20px;
  }
  > h3 {
    font-size: 15px;
  }
`;

export const CardMedia = styled(_CardMedia)`
  margin: 0 auto;
  color: white;
  width: 70px;
  height: 78px;
`;

export const Button = styled(_Button)`
  color: darkblue;
  span {
    color: ${({ theme }) => theme.text};
  }
`;
export const BigImage = styled.div`
  height: 100%;
  width: 40%;
  max-width: 350px;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/myPhoto.jpg");
  @media only screen and (max-width: 700px) {
    display: none;
    transition: all 0.3s linear;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight};
  > a {
    color: ${({ theme }) => theme.highlight};
  }
`;

export const BackgroundBlur = styled.div`
  max-width: 500px;
  margin: 25px auto;
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
  @media only screen and (max-width: 800px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.background};
      filter: blur(10px);
    }
  }
  position: relative;
`;
