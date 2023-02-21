const ProfileHeader = () => {
  return (
    <header id="profile-header" className="grid-row-1">
      <p id="profile-header-item-1">ASL is Awesome!</p>
      <p id="profile-header-item-2">
        Let's see what you have translated so far...
      </p>
      <img
        className="profile-header-item"
        id="logo"
        src="images\Logo.png"
        atl="LEL"
      />
    </header>
  );
};

export default ProfileHeader;
