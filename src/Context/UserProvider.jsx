import React, {createContext, useContext, useState} from 'react'
import { STORAGE_USER_KEY } from '../misc/storageKeys'
import { storageRead } from '../misc/storage'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)


const UserProvider = ({children}) => {

  const [user, setUser] = useState(storageRead(STORAGE_USER_KEY))
  const state = {user, setUser}

  return ( 
    <UserContext.Provider value = {state}>
      {children}
    </UserContext.Provider>
  ) 
}

export default UserProvider