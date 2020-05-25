import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import _Card from "@material-ui/core/Card";
import _CardHeader from "@material-ui/core/CardHeader";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Button } from "../../pages/style";

const Card = styled(_Card)`
  margin: 0 auto;
  padding: 15px;
`;
const CardHeader = styled(_CardHeader)`
  color: blue;
  text-align: center;
`;
const CardBody = styled.div`
  display: flex;
`;
const RightSection = styled.div`
  width: 35%;
`;
const LeftSection = styled.div`
  width: 65%;
`;
const CardMedia = styled(_CardMedia)`
  color: white;
  height: 300px;
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

const ProjectCardBig = (props) => {
  const { project, handleChange } = props;
  return (
    <div>
      <Card>
        <CardHeader title={project.title} subheader={project.subheader} />
        <CardBody>
          <LeftSection>
            <Description>
              {project.description ? (
                project.companyLink ? (
                  <>
                    {project.description}{" "}
                    <a href={project.companyLink}>{project.title}</a>
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
              <span style={{ color: "#f50057" }}>
                {project.specialization} Developer
              </span>
              , using {project.technologies.join(", ")}.
            </Technologies>
            <MyInput>{project.myInput}</MyInput>
            {project.demo && project.github ? (
              <>
                <a href={project.demo}>Demo and </a>{" "}
                <a href={project.github}>Github</a>{" "}
              </>
            ) : project.demo ? (
              <a href={project.demo}>Demo and </a>
            ) : project.github ? (
              <a href={project.github}>Github</a>
            ) : (
              ""
            )}
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
