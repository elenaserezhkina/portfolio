import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectCardBig from "../components/description/ProjectCardBig";
import {
  Container,
  ProjectsPreview,
  ProjectsDescription,
  Card,
  CardHeader,
  CardMedia,
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
    <div>
      <h1>My projects</h1>
      <Container>
        <ProjectsPreview>
          {projects.map((project) => (
            <Card onClick={() => setSelectedProject(project)}>
              <CardHeader title={project.title} subheader={project.subheader} />
              <CardMedia image={project.image} title={project.imgTitle} />
            </Card>
          ))}
        </ProjectsPreview>
        <ProjectsDescription>
          <ProjectCardBig
            project={selectedProject}
            handleChange={handleChange}
          />
        </ProjectsDescription>
      </Container>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
