import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Context/UserProvider'

const NavbarTop = () => {

  const {user} = useUser()
  return (
    <nav id='nav-top'>
      {user != null&& 
      <ul>
            <li id='nav-item'><NavLink to='/translation'>Translations</NavLink></li>
            <li id='nav-item'><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
      } 
    </nav>
  )
}

export default NavbarTop