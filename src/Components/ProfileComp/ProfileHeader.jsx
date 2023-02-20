const ProfileHeader = () => {
  return (
    <div id="profile-header">
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
    </div>
  );
};

export default ProfileHeader;
