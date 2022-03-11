import React from 'react'
import { useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../Context/auth.context'
import axios from 'axios';




function UserHome() {

        const [loggedInUser, setLoggedInUser] = useState(null);
        const [clientProjects, setClientProjects] = useState([])
        const [projectCards, setProjectCards] = useState([])

        const fetchCards = async (projectId) => {
            try {
              const storedToken = localStorage.getItem('authToken');
  
              let response = await axios.get(`${process.env.REACT_APP_API_URL}/project/${projectId}/cards`, {headers: { Authorization: `Bearer ${storedToken}` }});
              setProjectCards(response.data.cards);
              console.log(response.data)
            } catch (error) {
              console.log(error);
            }
          };

        const fetchProjects = async (clientId) => {
            try {
              const storedToken = localStorage.getItem('authToken');
  
              let response = await axios.get(`${process.env.REACT_APP_API_URL}/client/${clientId}/projects`, {headers: { Authorization: `Bearer ${storedToken}` }});
              setClientProjects(response.data.projects);
              console.log(response.data)
            } catch (error) {
              console.log(error);
            }
          };
      
        const fetchUser = async () => {
          try {
            const storedToken = localStorage.getItem('authToken');

            let response = await axios.get(`${process.env.REACT_APP_API_URL}/user/clients`, {headers: { Authorization: `Bearer ${storedToken}` }});
            setLoggedInUser(response.data);
            console.log(response.data)
          } catch (error) {
            console.log(error);
          }
        };
      
        useEffect(() => {
          fetchUser();
        }, []);

  return (
    <div>
        <aside>
            <div>
                <h3>Clients</h3>
                <div className="aside-dropdown">

                    {loggedInUser && loggedInUser.clients.map((client) => {
                        return (
                            <a key={client._id} className="dropdown-option" onClick={() => fetchProjects(client._id)}>{client.username}</a>
                        )
                    })}
                </div>
                <h3>Projects</h3>
                <div className="aside-dropdown">

                {clientProjects.map((project) => {
                    return (
                        <a key={project._id} className="dropdown-option" onClick={() => fetchCards(project._id)}>{project.name}</a>
                    )

                })}
                </div>
            </div>
        </aside>
        <div className="container">
            <h3>Documents</h3>
            {projectCards.map((card) => {
                    return (
                        <a key={card._id} className="card">{card.name}</a>
                    )
            })}

        </div>

    </div>
  )
}

export default UserHome