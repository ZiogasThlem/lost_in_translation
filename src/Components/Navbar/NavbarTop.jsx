import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Context/UserProvider'

const NavbarTop = () => {

  const {user} = useUser()
  return (
    <nav id='nav-top'>
      {user != null&& 
      <>
        <h1 id='website-name'>Lost in Translation</h1>
        <ul>
            <li id='nav-item'><NavLink to='/translation'>Translations</NavLink></li>
            <li id='nav-item'><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
        <h1 id='website-name'>{user.username}'s Profile</h1>
      </>
      } 
    </nav>
  )
}

export default NavbarTop