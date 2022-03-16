import React from 'react'
import { useState, useEffect } from 'react'
import ClientList from '../ClientList/ClientList'
import axios from 'axios';


function SideBar(props) {

  const {loggedInUser, clientProjects, projectCards, viewToggle, editClient, activeProject} = props;
    

  return (
    <div>

        <ClientList clientProjects={clientProjects} projectCards={projectCards} loggedInUser={loggedInUser} viewToggle={viewToggle} editClient={editClient} activeProject={activeProject} />

    </div>
  )
}

export default SideBar