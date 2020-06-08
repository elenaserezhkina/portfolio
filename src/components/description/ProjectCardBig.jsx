import React from "react";
import styled from "styled-components";
import { Button, Card as _Card, Highlight } from "../../pages/style";
import ProjectLinks from "../ProjectLinks";

const Container = styled.div`
  position: relative;
`;
const Card = styled(_Card)`
  // padding: 15px;
  // display: flex;
`;

const LeftSection = styled.div`
  width: 55%;
  flex-grow: 2;
  padding: 0 4%;
  @media only screen and (max-width: 500px) {
    transition: all 0.3s linear;
    font-size: 14px;
  }
`;

const Technologies = styled.div`
  margin-bottom: 10px;
  img {
    margin-right: 3px;
    max-height: 48px;
    max-width: 48px;
  }
  div {
    min-width: 320px;
  }
`;
const Description = styled(Technologies)``;
const MyInput = styled(Technologies)``;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 300px;
  @media only screen and (max-width: 600px) {
    transition: all 0.3s linear;
    margin-right: 10px;
  }
`;

const ProjectCardBig = (props) => {
  const { project, handleChange } = props;
  return (
    <Container>
      <Card>
        <LeftSection>
          <h2>{project.title}</h2>
          <h3>{project.subheader}</h3>
          <Description>
            {project.description}{" "}
            {project.companyLink && (
              <Highlight>
                <a href={project.companyLink}>{project.title}</a>
              </Highlight>
            )}
          </Description>

          <MyInput>{project.myInput} </MyInput>
          <ProjectLinks
            demo={project.demo}
            github={project.github}
            event={project.link}
          />
          <Technologies>
            Stack
            <div>
              {project.stack.map((el) => (
                <img src={el.img} alt={el.alt} title={el.alt} />
              ))}
            </div>
          </Technologies>
        </LeftSection>
      </Card>

      <ButtonsContainer>
        <Button onClick={() => handleChange(-1)}>Previous</Button>
        <Button onClick={() => handleChange(+1)}>Next</Button>
      </ButtonsContainer>
    </Container>
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
