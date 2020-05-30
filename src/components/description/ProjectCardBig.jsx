import React from "react";
import styled from "styled-components";
import { Button, Card as _Card, Highlight } from "../../pages/style";
import ProjectLinks from "../ProjectLinks";
import PhoneCard from "../PhoneCard";

const Container = styled.div`
  // padding: 30px 0;
  position: relative;
`;
const Card = styled(_Card)`
  // padding: 15px;
  // display: flex;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-right: 20px;

  @media only screen and (max-width: 500px) {
    transition: all 0.3s linear;
    bottom: auto;
    top: 20px;
  }
 
}
`;
const LeftSection = styled.div`
  width: 55%;
  flex-grow: 2;
  padding: 0 5px;
  @media only screen and (max-width: 500px) {
    transition: all 0.3s linear;
    font-size: 14px;
  }
`;

const Technologies = styled.div`
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
    <Container>
      <Card>
        <LeftSection>
          <h2>{project.title}</h2>
          <h3>{project.subheader}</h3>
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
      <RightSection>
        <PhoneCard image={project.image} title={project.title}></PhoneCard>
      </RightSection>
      <ButtonsContainer>
        {/* <Button onClick={() => handleChange(-1)}>Previous</Button> */}
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
