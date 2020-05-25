import _Card from "@material-ui/core/Card";
import _CardHeader from "@material-ui/core/CardHeader";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Button as _Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
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
  height: 200px;
  > h2 {
    font-size: 20px;
  }
  > h3 {
    font-size: 15px;
  }
`;
// export const CardHeader = styled.h2`
//   color: ${({ theme }) => theme.text};
// `;
// export const CardSubheader = styled.h3`
//   color: ${({ theme }) => theme.subHeader};
// `;

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
  height: 350px;
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
