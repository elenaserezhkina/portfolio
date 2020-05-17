import React, { useState } from "react";
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
          <ProjectCardBig project={selectedProject} />
        </ProjectsDescription>
      </Container>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
