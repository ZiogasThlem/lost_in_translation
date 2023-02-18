import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../Context/UserProvider'
import { storageDelete } from '../../misc/storage'
import { STORAGE_USER_KEY } from '../../misc/storageKeys'

const ProfileButtons = () => {

  const {setUser} = useUser()
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')){
    storageDelete(STORAGE_USER_KEY)
    setUser(null)
    }
  }

  return (
    <ul>
      <li><Link to='/translation'>Translations</Link></li>
      <li><button>Clear History</button></li>
      <li><button onClick={handleLogout}>Log Out</button></li>
    </ul>
  )
}

export default ProfileButtons