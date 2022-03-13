
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx'
import HomePage from './Pages/HomePage/HomePage';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import UserHome from './Pages/UserHome/UserHome';



function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<UserHome />} />
        <Route path="/projects" element={<UserHome />} />
        <Route path="/cards" element={<UserHome />} />
      </Routes>
    
    </div>
  );
}

export default App;
