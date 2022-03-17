import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Context/auth.context';
import ClientList from '../ClientList/ClientList'
import axios from 'axios';


function SideBar(props) {

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  const {loggedInUser, clientProjects, projectCards, viewToggle, editClient, activeProject} = props;
    

  return (
    <div>

        <ClientList clientProjects={clientProjects} projectCards={projectCards} loggedInUser={loggedInUser} viewToggle={viewToggle} editClient={editClient} activeProject={activeProject} />
        <button className="purple-btn-sm-logout" onClick={logoutUser}>Logout</button>

    </div>
  )
}

export default SideBar