import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import _Card from "@material-ui/core/Card";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Button } from "../../pages/style";

const Card = styled(_Card)`
  padding: 15px;
  &.MuiPaper-root {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.card};
  }
`;

// color: ${({ theme }) => theme.text};
const CardHeader = styled.h2``;
const CardSubheader = styled.h3`
  color: ${({ theme }) => theme.subHeader};
`;
const CardBody = styled.div`
  display: flex;
`;
const RightSection = styled.div`
  width: 35%;
`;
const LeftSection = styled.div`
  width: 65%;
  @media only screen and (max-width: 500px) {
    transition: all 0.3s linear;
    font-size: 15px;
  }
`;
const CardMedia = styled(_CardMedia)`
  height: 310px;
  width: 165px;
`;
const Technologies = styled.div`
  max-width: 300px;
  margin-bottom: 10px;
`;
const Description = styled(Technologies)``;
const MyInput = styled(Technologies)``;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight};
  > a {
    color: ${({ theme }) => theme.highlight};
  }
`;

const ProjectCardBig = (props) => {
  const { project, handleChange, theme } = props;
  const isLight = theme === "light";
  return (
    <div>
      <Card>
        <CardHeader>{project.title}</CardHeader>
        <CardSubheader>{project.subheader}</CardSubheader>
        <CardBody>
          <LeftSection>
            <Description>
              {project.description ? (
                project.companyLink ? (
                  <>
                    {project.description}{" "}
                    <Highlight>
                      <a href={project.companyLink}>{project.title}</a>
                    </Highlight>
                  </>
                ) : (
                  project.description
                )
              ) : (
                ""
              )}
            </Description>
            <Technologies>
              I worked as a{" "}
              <Highlight>{project.specialization} Developer</Highlight>, using{" "}
              {project.technologies.join(", ")}.
            </Technologies>
            <MyInput>
              {project.myInput}{" "}
              <Highlight>
                {project.demo && project.github ? (
                  <>
                    <a href={project.demo}>Demo and </a>
                    <a href={project.github}>Github</a>{" "}
                  </>
                ) : project.demo ? (
                  <a href={project.demo}>Demo and </a>
                ) : project.github ? (
                  <a href={project.github}>Github</a>
                ) : (
                  ""
                )}
              </Highlight>
            </MyInput>
          </LeftSection>
          <RightSection>
            <CardMedia image={project.image} title={project.title} />
          </RightSection>
        </CardBody>
      </Card>
      <ButtonsContainer>
        <Button onClick={() => handleChange(-1)}>Previous</Button>
        <Button onClick={() => handleChange(+1)}>Next</Button>
      </ButtonsContainer>
    </div>
  );
};

//Props that this components accepts
// ProjectCardBig.propTypes = {
//   project: PropTypes.object({
//     title: PropTypes.string,
//     subheader: PropTypes.string,
//     image: PropTypes.string,
//     specialization: PropTypes.string,
//     technologies: PropTypes.arrayOf(PropTypes.string),
//   }),
// };

export default ProjectCardBig;
