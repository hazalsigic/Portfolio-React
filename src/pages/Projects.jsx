import React, { useState } from 'react';
import project from '../project.js';
import Card from '../components/Card';


function Projects() {

  return (
    <div className="row">
       {project.map((project) => (
        <Card
          name={project.name}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;
