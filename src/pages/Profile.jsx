import React, { useEffect } from "react";
import ProfileHeader from "../components/profileComp/ProfileHeader";
import ListOfTranslatedWords from "../components/profileComp/ListOfTranslatedWords";
import withAuth from "../miscellaneous/withAuth";
import { useUser } from "../context/UserProvider";
import ProfileButtons from "../components/profileComp/ProfileButtons";
import { userById } from "../api/user";
import { storageSave, STORAGE_USER_KEY } from "../miscellaneous/storage";

const Profile = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error === null) {
        storageSave(STORAGE_USER_KEY, latestUser);
        setUser(latestUser);
      }
    };
  }, []);

  return (
    <>
      <ProfileHeader username={user.username} />
      <div id="profile-div">
        <ListOfTranslatedWords translations={user.translations} />
        <ProfileButtons />
      </div>
    </>
  );
};

export default withAuth(Profile);
