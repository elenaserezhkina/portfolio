import React from "react";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Button, Card as _Card, Highlight } from "../../pages/style";

const Card = styled(_Card)`
  padding: 15px;
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

const ProjectCardBig = (props) => {
  const { project, handleChange } = props;
  return (
    <div>
      <Card>
        <h2>{project.title}</h2>
        <h3>{project.subheader}</h3>
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
