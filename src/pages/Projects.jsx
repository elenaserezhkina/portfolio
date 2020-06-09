import React, { useState } from "react";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import ProjectCardBig from "../components/description/ProjectCardBig";
import Footer from "../components/Footer";
import PhoneCard from "../components/PhoneCard";
import SmallStack from "../components/SmallStack";
import {
  Container,
  ProjectsPreview,
  ProjectsDescription,
  SmallCard as _SmallCard,
  PageContainer,
} from "./style";
import { projects } from "../components/projects/allProjects";

const SmallCard = styled(_SmallCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: linear-gradient(#000000b5, #000000b5),
    url(${(props) => props.value});
  background-size: cover;
  &.MuiPaper-root {
    transition: all 0.2s linear;
  }
  ${(props) => props.selected && "transform: scale(0.7);"}
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: -3px;
  padding-right: 5%;

  @media only screen and (max-width: 600px) {
    transition: all 0.3s linear;
    bottom: auto;
    top: 20px;
  }
 
}
`;
const SmallTitle = styled.h2`
  font-size: 20px;
  color: white;
`;

const Projects = (props) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleChange = (number) => {
    let currentIndex = projects.indexOf(selectedProject);
    let arrayLength = projects.length;

    if (currentIndex === 0 && number === -1) {
      setSelectedProject(projects[arrayLength - 1]);
    } else if (currentIndex === arrayLength - 1 && number === +1) {
      setSelectedProject(projects[0]);
    } else {
      setSelectedProject(projects[currentIndex + number]);
    }
  };

  return (
    <PageContainer>
      <h1 id="projects">My projects</h1>
      <Container>
        <ProjectsPreview>
          {projects.map((project, key) => (
            <SmallCard
              onClick={() => setSelectedProject(project)}
              key={project.title}
              value={project.smallImage}
              selected={selectedProject === project}
            >
              <SmallTitle>{project.title}</SmallTitle>
              <SmallStack stack={project.stack} />
            </SmallCard>
          ))}
        </ProjectsPreview>
        <ProjectsDescription>
          <Swipeable
            onSwipedLeft={() => handleChange(-1)}
            onSwipedRight={() => handleChange(+1)}
          >
            <ProjectCardBig
              project={selectedProject}
              handleChange={handleChange}
              theme={props.theme}
            />
          </Swipeable>
          <RightSection>
            <PhoneCard
              image={selectedProject.image}
              title={selectedProject.title}
            ></PhoneCard>
          </RightSection>
        </ProjectsDescription>
      </Container>
      <Footer theme={props.theme} />
    </PageContainer>
  );
};

Projects.propTypes = {};

export default Projects;
