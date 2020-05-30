import React, { useState } from "react";
import ProjectCardBig from "../components/description/ProjectCardBig";
import Footer from "../components/Footer";
import styled from "styled-components";
import {
  Container,
  ProjectsPreview,
  ProjectsDescription,
  SmallCard as _SmallCard,
  PageContainer,
} from "./style";
import { projects } from "../components/projects/allProjets";

const SmallCard = styled(_SmallCard)`
  background-image: ${(props) =>
      !props.selected &&
      "linear-gradient(rgba(4, 4, 4, 0.56), rgba(0, 0, 0, 0.35)), "}
    url(${(props) => props.value});
  background-size: cover;
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
      <h1>My projects</h1>
      <Container>
        <ProjectsPreview>
          {projects.map((project, key) => (
            <SmallCard
              onClick={() => setSelectedProject(project)}
              key={project.title}
              value={project.image}
              selected={selectedProject === project}
            >
              {/* <h2>{project.title}</h2>
              <h3>{project.subheader}</h3> */}
            </SmallCard>
          ))}
        </ProjectsPreview>
        <ProjectsDescription>
          <ProjectCardBig
            project={selectedProject}
            handleChange={handleChange}
            theme={props.theme}
          />
        </ProjectsDescription>
      </Container>
      <Footer theme={props.theme} />
    </PageContainer>
  );
};

Projects.propTypes = {};

export default Projects;
