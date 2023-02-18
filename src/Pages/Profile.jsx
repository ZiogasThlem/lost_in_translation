import React from 'react'
import ClearList from '../Components/ProfileComp/ClearList'
import LogOut from '../Components/ProfileComp/LogOut'
import ProfileHeader from '../Components/ProfileComp/ProfileHeader'
import ListOfTranslatedWords from '../Components/ProfileComp/ListOfTranslatedWords'
import withAuth from '../misc/withAuth'
import { useUser } from '../Context/UserProvider'

const Profile = () => {
  
  const {user} = useUser()
  
  return (
    <>
      <ProfileHeader />
      <ListOfTranslatedWords />
      <ClearList />
      <LogOut />
    </>
  )
}

export default withAuth(Profile)