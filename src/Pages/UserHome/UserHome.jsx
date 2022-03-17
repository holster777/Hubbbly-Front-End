import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import logo from '../../images/Hubbly-Logo.png'
import userIcon from '../../images/User-Icon.png'
import {Link} from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar';
import CardList from '../../Components/CardList/CardList';
import CreateClients from '../../Components/ClientForms/CreateClients'
import EditClient from '../../Components/ClientForms/EditClient'
import CreateProject from '../../Components/ProjectForms/CreateProject'
import EditProject from '../../Components/ProjectForms/EditProject'
import CreateCard from '../../Components/CardForms/CreateCard'
import Home from '../../Components/Home/Home'


function UserHome() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [projectCards, setProjectCards] = useState([]);
  const [showNewClientForm, setShowNewClientForm] = useState(false)
  const [showEditClientForm, setShowEditClientForm] = useState(false)
  const [showCardList, setShowCardList] = useState(false)
  const [clientToEdit, setClientToEdit] = useState('')
  const [activeProject, setActiveProject] = useState('')
  const [showNewProjectForm, setShowNewProjectForm] = useState(false)
  const [showCardLayout, setShowCardLayout] = useState(false)
  const [showEditProjectForm, setShowEditProjectForm] = useState(false)
  const [showNewCardForm, setShowNewCardForm] = useState(false)
  const [showHome, setShowHome] = useState(false)


    const fetchCards = async (projectId) => {

      setActiveProject(projectId)

      console.log(projectId)

        try {
          const storedToken = localStorage.getItem('authToken');
          console.log(projectId)

          let response = await axios.get(`${process.env.REACT_APP_API_URL}/project/${projectId}/cards`, {headers: { Authorization: `Bearer ${storedToken}` }});
          setProjectCards(response.data.cards);
          setShowCardList(true)
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };

    const fetchUser = async () => {

        try {
          setActiveProject('')
          const storedToken = localStorage.getItem('authToken');
          setShowHome(true)
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/user/clients`, {headers: { Authorization: `Bearer ${storedToken}` }});
          setLoggedInUser(response.data);
        } catch (error) {
          console.log(error);
        }
      };


  useEffect(() => {
    fetchUser()

  }, []);


  const viewToggle = (formType) => {


    if (formType === 'edit') {

      setShowEditClientForm(true)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'new-client') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(true)
      setShowNewProjectForm(false)
      setShowCardLayout(false)
      setShowEditProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'cardList') {

      setShowEditClientForm(false)
      setShowCardList(true)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowCardLayout(false)
      setShowEditProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'newProject') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(true)
      setShowEditProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'home') {
      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowEditProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(true)

    }

    if (formType === 'cardLayout') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowCardLayout(true)
      setShowEditProjectForm(false)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'editProject') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowCardLayout(false)
      setShowEditProjectForm(true)
      setShowNewCardForm(false)
      setShowHome(false)

    }

    if (formType === 'newCard') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(false)
      setShowNewProjectForm(false)
      setShowCardLayout(false)
      setShowEditProjectForm(false)
      setShowNewCardForm(true)
      setShowHome(false)

    }

  }

  const fetchClientEdit = (clientId) => {

    setClientToEdit(clientId)

  }
      
  return (
    <div>
        <aside>
        <Link  to="/"><img className="logo" src={logo}/></Link>
        <SideBar loggedInUser={loggedInUser} projectCards={fetchCards} viewToggle={viewToggle} editClient={fetchClientEdit} activeProject={activeProject}/>
        </aside>

        {showCardList && projectCards && <CardList projectCards={projectCards} fetchCards={fetchCards} viewToggle={viewToggle} showCardLayout={showCardLayout}/>}
        {showNewClientForm && <CreateClients viewToggle={viewToggle} fetchUser={fetchUser}/>}
        {showEditClientForm && <EditClient clientToEdit={clientToEdit} viewToggle={viewToggle} fetchUser={fetchUser} />}
        {showNewProjectForm && <CreateProject clientToEdit={clientToEdit} viewToggle={viewToggle} fetchUser={fetchUser} client={clientToEdit} />}
        {showEditProjectForm && <EditProject projectToEdit={activeProject} viewToggle={viewToggle} fetchUser={fetchUser} client={clientToEdit} />}
        {showNewCardForm && <CreateCard projectToEdit={activeProject} viewToggle={viewToggle} fetchUser={fetchUser} client={clientToEdit} />}
        {showHome && <Home />}
    </div>
  )
}

export default UserHome