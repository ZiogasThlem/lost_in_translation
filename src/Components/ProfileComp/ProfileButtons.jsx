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
    <>
      <button>Clear History</button>
      <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default ProfileButtons