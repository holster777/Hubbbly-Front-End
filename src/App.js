
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import UserHome from './Pages/UserHome/UserHome'; 
import Locked from '../src/Components/Locked/Locked'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Locked><UserHome /></Locked>} />
        <Route path="/projects" element={<Locked><UserHome /></Locked>} />
        <Route path="/cards" element={<Locked><UserHome /></Locked>} />
        <Route path="/card-info" element= {<Locked><UserHome /></Locked>} />  
      </Routes>
    
    </div>
  );
}

export default App;
