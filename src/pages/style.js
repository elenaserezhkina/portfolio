import _Card from "@material-ui/core/Card";
import _CardHeader from "@material-ui/core/CardHeader";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export const ProjectsPreview = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const ProjectsDescription = styled.div`
  width: 50%;
  padding: 20px;
`;
export const Card = styled(_Card)`
  width: 150px;
  margin: 0 10px 10px 10px;
  height: 200px;
`;
export const CardHeader = styled(_CardHeader)`
  color: darkblue;
`;
export const CardMedia = styled(_CardMedia)`
  color: white;
  // width: 50%;
  height: 100px;
`;
