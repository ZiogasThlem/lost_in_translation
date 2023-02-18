import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Context/UserProvider'

const NavbarTop = () => {

  const {user} = useUser()
  return (
    <nav>
      {user!= null&& 
      <ul>
            <li><NavLink to='/translation'>Translations</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
      } 
    </nav>
  )
}

export default NavbarTop