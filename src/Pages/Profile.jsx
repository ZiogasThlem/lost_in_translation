import React, { useEffect } from 'react'
import ProfileHeader from '../Components/ProfileComp/ProfileHeader'
import ListOfTranslatedWords from '../Components/ProfileComp/ListOfTranslatedWords'
import withAuth from '../misc/withAuth'
import { useUser } from '../Context/UserProvider'
import ProfileButtons from '../Components/ProfileComp/ProfileButtons'
import { userById } from '../api/user'
import { storageSave, STORAGE_USER_KEY } from '../misc/storage'

const Profile = () => {
  
  const {user, setUser} = useUser()

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id)
      if (error === null) {
        storageSave(STORAGE_USER_KEY, latestUser)
        setUser(latestUser)
      }
    }
  }, [])

  return (
    <>
      <ProfileHeader username={user.username} />
      <div id='profile-div'>
        <ListOfTranslatedWords translations={user.translations} />
      </div>
      <ProfileButtons />
    </>
  )
}

export default withAuth(Profile)