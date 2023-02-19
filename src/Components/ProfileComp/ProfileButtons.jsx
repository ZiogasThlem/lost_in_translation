import React from 'react'
import { useUser } from '../../Context/UserProvider'
import { storageDelete, storageSave } from '../../misc/storage'
import { STORAGE_USER_KEY } from '../../misc/storageKeys'
import {clearHistory} from '../../api/translation'

const ProfileButtons = () => {

  const {user, setUser} = useUser()

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')){
    storageDelete(STORAGE_USER_KEY)
    setUser(null)
    }
  }

  const handleClearHistory = async () => {
    if (!window.confirm('Are you sure you want to clear translation history?')){
      return
    }
    const [clearError] = await clearHistory(user.id)
    if (clearError != null) return
    const updatedUser = {...user,translations: []}
    storageSave(STORAGE_USER_KEY,updatedUser)
    setUser(updatedUser)
  }

  return (
    <>
      <button onClick={handleClearHistory}>Clear History</button>
      <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default ProfileButtons