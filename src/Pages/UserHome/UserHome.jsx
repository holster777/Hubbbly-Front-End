import React from 'react'
import { useState, useContext, useEffect} from 'react'
import axios from 'axios';
import logo from '../../images/Hubbly-Logo.png'
import userIcon from '../../images/User-Icon.png'
import {Link, useNavigate} from 'react-router-dom'
import CardLayout from '../../Components/CardLayout/CardLayout';



function UserHome() {

        const [loggedInUser, setLoggedInUser] = useState(null);
        const [clientProjects, setClientProjects] = useState([]);
        const [projectCards, setProjectCards] = useState([]);
        const [cardInfo, setCardInfo] = useState([]);
        const [cardClicked, setCardClicked] = useState(false)

        const navigate = useNavigate();

        const fetchCardInfo = async (cardId) => {

          try {
        
            const storedToken = localStorage.getItem('authToken');
            console.log(cardId)

            let response = await axios.get(`${process.env.REACT_APP_API_URL}/card/${cardId}`, {headers: { Authorization: `Bearer ${storedToken}` }});
            setCardInfo(response.data);
            setCardClicked(true)
            console.log(cardInfo)

          } catch (error) {
            console.log(error);
          }

        }
  

        const fetchCards = async (projectId) => {
            try {
              const storedToken = localStorage.getItem('authToken');
              console.log(projectId)
  
              let response = await axios.get(`${process.env.REACT_APP_API_URL}/project/${projectId}/cards`, {headers: { Authorization: `Bearer ${storedToken}` }});
              setProjectCards(response.data.cards);
              // console.log(response.data.cards)
            } catch (error) {
              console.log(error);
            }
          };

        const fetchProjects = async (clientId) => {
            try {
              const storedToken = localStorage.getItem('authToken');
  
              let response = await axios.get(`${process.env.REACT_APP_API_URL}/client/${clientId}/projects`, {headers: { Authorization: `Bearer ${storedToken}` }});
              setClientProjects(response.data.projects);
            } catch (error) {
              console.log(error);
            }
          };
      
        const fetchUser = async () => {
          try {
            const storedToken = localStorage.getItem('authToken');

            let response = await axios.get(`${process.env.REACT_APP_API_URL}/user/clients`, {headers: { Authorization: `Bearer ${storedToken}` }});
            setLoggedInUser(response.data);
          } catch (error) {
            console.log(error);
          }
        };
      
        useEffect(() => {
          fetchUser()
        }, []);

  return (
    <div>
        <aside>
        <Link  to="/"><img className="logo" src={logo}/></Link>
            <div className="list">
                <h3>Clients</h3>
                <div className="aside-dropdown">

                    {loggedInUser && loggedInUser.clients.map((client) => {
                        return (
                            <a key={client._id} className="dropdown-option" onClick={() => fetchProjects(client._id)}>{client.username}</a>
                        )
                    })}

                </div>
                <div className="btn-box-left">
                {/* {project && <Link to={`/projects/edit/${project._id}`}>Edit Project</Link>} */}

                  <a className="black-btn-sm" onClick="/new-client"> New Client </a>
                  <a className="black-btn-sm" onClick="/edit-client"> Edit Client </a>
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
            {/* <div className="user-info">
              <img src={userIcon}/>
              <h3>{loggedInUser.username}</h3>
            </div> */}
        </aside>
        <div className="main-container">
          
            <h3>Documents</h3>
            <div className="row">
            {projectCards.map((card) => {
                    return (
                        <div className="card" key={card._id} onClick={() => fetchCardInfo(card._id)}>
                         <a>{card.name}</a>
                        </div>
                    )
            })}
            </div>
            <div>

              {cardClicked, <p>{cardInfo.images}</p>}

              {/* {cardClicked && cardInfo.images.map((img) => {

                <p>{img}</p>

              })} */}
            </div>

             
        </div>

    </div>
  )
}

export default UserHome