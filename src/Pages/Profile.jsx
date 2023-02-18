import React from 'react'
import ProfileHeader from '../Components/ProfileComp/ProfileHeader'
import ListOfTranslatedWords from '../Components/ProfileComp/ListOfTranslatedWords'
import withAuth from '../misc/withAuth'
import { useUser } from '../Context/UserProvider'
import ProfileButtons from '../Components/ProfileComp/ProfileButtons'

const Profile = () => {
  
  const {user} = useUser()

  return (
    <>
      <ProfileHeader username={user.username} />
      <ListOfTranslatedWords translations={user.translations} />
      <ProfileButtons />
    </>
  )
}

export default withAuth(Profile)