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


function UserHome() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [projectCards, setProjectCards] = useState([]);
  const [showNewClientForm, setShowNewClientForm] = useState(false)
  const [showEditClientForm, setShowEditClientForm] = useState(false)
  const [showCardList, setShowCardList] = useState(false)
  const [clientToEdit, setClientToEdit] = useState('')


    const fetchCards = async (projectId) => {
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


  const viewToggle = (formType) => {


    if (formType === 'edit') {

      setShowEditClientForm(true)
      setShowCardList(false)
      setShowNewClientForm(false)

    }

    if (formType === 'new-client') {

      setShowEditClientForm(false)
      setShowCardList(false)
      setShowNewClientForm(true)

    }

    if (formType === 'cardList') {

      setShowEditClientForm(false)
      setShowCardList(true)
      setShowNewClientForm(false)


    }

  }

  const fetchClientEdit = (clientId) => {

    setClientToEdit(clientId)

  }
      
  return (
    <div>
        <aside>
        <Link  to="/"><img className="logo" src={logo}/></Link>
        <SideBar loggedInUser={loggedInUser} projectCards={fetchCards} viewToggle={viewToggle} editClient={fetchClientEdit}/>
        </aside>

        {showCardList && projectCards && <CardList projectCards={projectCards} />}
        {showNewClientForm && <CreateClients viewToggle={viewToggle} fetchUser={fetchUser}/>}
        {showEditClientForm && <EditClient clientToEdit={clientToEdit} viewToggle={viewToggle} />}

    </div>
  )
}

export default UserHome