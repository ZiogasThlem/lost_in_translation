import React from "react";
import { useUser } from "../../context/UserProvider";
import {
  storageDelete,
  storageSave,
  STORAGE_USER_KEY,
} from "../../miscellaneous/storage";
import { clearHistory } from "../../api/translation";

const ProfileButtons = () => {
  const { user, setUser } = useUser();

  // delete user from the session storage memory
  // and redirecting the to the logout page
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      storageDelete(STORAGE_USER_KEY);
      setUser(null);
    }
  };

  // clearing all the words translated from the API
  // and displaying an appropriate message
  const handleClearHistory = async () => {
    if (
      !window.confirm("Are you sure you want to clear translation history?")
    ) {
      return;
    }
    const [clearError] = await clearHistory(user.id);
    if (clearError != null) return;
    const updatedUser = { ...user, translations: [] };
    storageSave(STORAGE_USER_KEY, updatedUser);
    setUser(updatedUser);
  };

  return (
    <span id="profile-buttons-div">
      <button
        id="btn"
        className="btn btn-lg btn-danger"
        onClick={handleClearHistory}
      >
        Clear History
      </button>
      <button id="btn" className="btn btn-lg btn-dark" onClick={handleLogout}>
        Log Out
      </button>
    </span>
  );
};

export default ProfileButtons;
