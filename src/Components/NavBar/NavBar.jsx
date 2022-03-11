import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Hubbly-Logo.png'


function NavBar() {
  return (
    <nav>
        <Link to="/"><img src={logo}/></Link>
    </nav>
  )
}

export default NavBar