import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import { Button as _Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;
export const Container = styled.div`
  min-height: 500px;
  display: flex;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
`;
export const ProjectsPreview = styled.div`
  width: 37%;
  padding: 10px 0;
  display: flex;
  max-height: 500px;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 935px) {
    display: none;
    transition: all 0.3s linear;
  }
`;
export const ProjectsDescription = styled.div`
  position: relative;
  width: 65%;
  padding: 5px;
  margin: 10px auto;
  @media only screen and (max-width: 935px) {
    width: 100%;
    transition: all 0.3s linear;
    padding: 5px;
  }
`;
export const Card = styled(_Card)`
  &.MuiPaper-root {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.card};
  }
`;
export const SmallCard = styled(Card)`
  width: 130px;
  margin: 0 5px 5px 5px;
  height: 130px;
  cursor: pointer;
`;

export const Button = styled(_Button)`
  color: darkblue;
  span {
    color: ${({ theme }) => theme.text};
  }
`;
export const BigImage = styled.div`
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
