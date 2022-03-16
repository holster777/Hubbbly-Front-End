import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function ProjectList(props) {

    const {clientProjects, projectCards, loggedInUser, activeProject, activeClient, viewToggle} = props;

  return (
    <div>
        <h3>Projects</h3>
            <div className="aside-dropdown">

            {clientProjects.map((project) => {
                return (
                  <>
                  {(activeProject === project._id) && <a key={project._id} className="dropdown-option-active" onClick={() => projectCards(project._id)}>{project.name}</a>}
                  {(activeProject != project._id) && <a key={project._id} className="dropdown-option" onClick={() => projectCards(project._id)}>{project.name}</a>}
                  </>

            )})}
            </div>
            <div className="btn-box-left">
                  <a className="black-btn-sm" onClick={() => viewToggle('newProject')} loggedInUser={loggedInUser} activeClient={activeClient}> New Project </a>

                  {activeProject && 
                    <a className="purple-btn-sm" onClick={() => viewToggle('editProject')} loggedInUser={loggedInUser} activeProject={activeProject}> Edit Project </a>
                  }
                  
                </div>
    </div>
  )
}

export default ProjectList