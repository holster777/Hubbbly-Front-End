import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function ProjectList(props) {

    const {clientProjects, projectCards} = props;

  return (
    <div>
        <h3>Projects</h3>
            <div className="aside-dropdown">

            {clientProjects.map((project) => {
                return (
                    <a key={project._id} className="dropdown-option" onClick={() => projectCards(project._id)}>{project.name}</a>
                )

            })}
            </div>
    </div>
  )
}

export default ProjectList