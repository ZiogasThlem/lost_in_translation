import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

// navbar component for translation-profile page
// displaying while user is logged in
const NavbarTop = () => {
  const { user } = useUser();
  return (
    <nav id="nav-top" className="grid-row-1">
      {user != null && (
        <>
          <h1 id="website-name">Lost in Translation</h1>
          <ul>
            <li id="nav-item">
              <NavLink to="/translation">Translations</NavLink>
            </li>
            <li id="nav-item">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
          <h1 id="website-name">{user.username}'s Profile</h1>
        </>
      )}
    </nav>
  );
};

export default NavbarTop;
