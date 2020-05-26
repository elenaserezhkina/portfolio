import React, { useState } from "react";
import ProjectCardBig from "../components/description/ProjectCardBig";
import Footer from "../components/Footer";
import {
  Container,
  ProjectsPreview,
  ProjectsDescription,
  SmallCard,
  CardMedia,
  PageContainer,
} from "./style";
import { projects } from "../components/projects/allProjets";

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
            >
              <h2>{project.title}</h2>
              <h3>{project.subheader}</h3>
              <CardMedia image={project.image} title={project.imgTitle} />
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
