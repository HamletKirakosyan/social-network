import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbarList">
          <li className="navbarListItem">
            <Link to="/">News</Link>
          </li>
          <li className="navbarListItem">
            <Link to="/message">Message</Link>
          </li>
          <li className="navbarListItem">
            <Link to="/friends">Friends</Link>
          </li>
          <li className="navbarListItem">
            <Link to="/profile">Profile</Link>
          </li> 
          <li className="navbarListItem">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;