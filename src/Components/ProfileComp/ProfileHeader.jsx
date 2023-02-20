const ProfileHeader = () => {
  return (
    <header id="profile-header" className="grid-row-1">
      <img
        className="profile-header-item"
        id="logo"
        src="images\Logo.png"
        atl="LEL"
      />
      <p className="profile-header-item">ASL is Awesome!</p>
      <p className="profile-header-item">
        Let's see what you have translated so far...
      </p>
    </header>
  );
};

export default ProfileHeader;
