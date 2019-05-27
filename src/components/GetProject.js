import React from 'react'

const Projects = ({ projects }) => {
  return (
    <div>
      <center><h1>Projects</h1></center>
      {projects.map((project) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{project.title}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Projects;
