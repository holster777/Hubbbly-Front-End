import React from 'react'
import ProjectList from '../ProjectList/ProjectList';
import axios from 'axios';
import {useState} from 'react'



function ClientList(props) {

    const {loggedInUser, projectCards, viewToggle, editClient, activeProject} = props;
    const [clientProjects, setClientProjects] = useState([]);
    const [activeClient, setActiveClient] = useState(null);
    

    const fetchProjects = async (clientId) => {

      editClient(clientId)
      setActiveClient(clientId)

      try {
        const storedToken = localStorage.getItem('authToken');
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/client/${clientId}/projects`, {headers: { Authorization: `Bearer ${storedToken}` }});
        setClientProjects(response.data.projects);
      } catch (error) {
        console.log(error);
      }
    };

  return (
        <div className="list">
                <h3>Clients</h3>
                <div className="aside-dropdown">

                    {loggedInUser && loggedInUser.clients.map((client) => {
                        return (
                          <>
                          {(activeClient === client._id) &&  <a key={client._id} className="dropdown-option-active" onClick={() => fetchProjects(client._id)}>{client.username}</a>}
                          {(activeClient != client._id) &&  <a key={client._id} className="dropdown-option" onClick={() => fetchProjects(client._id)}>{client.username}</a>}
                          </>
                        )
                    })}

                </div>
                <div className="btn-box-left">
                  <a className="black-btn-sm" onClick={() => viewToggle('new-client')} loggedInUser={loggedInUser}> New Client </a>

                  {activeClient && 
                    <a className="black-btn-sm" onClick={() => viewToggle('edit')} loggedInUser={loggedInUser}> Edit Client </a>
                  }
                  
                </div>
                <ProjectList clientProjects={clientProjects} projectCards={projectCards} activeProject={activeProject}/>
        </div>

  )
}

export default ClientList