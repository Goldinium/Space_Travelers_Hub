import { Outlet, NavLink } from 'react-router-dom';
import Planeticon from '../assets/Planeticon.png';

function NavLinks() {
  return (
    <div className="root-container">
      <div className="header">
        <div className="logo-header">
          <img src={Planeticon} alt="planet-icon" />
          <h1 className="heading">
            Space Traveler&apos;s Hub
          </h1>
        </div>
        <nav>
          <ul className="nav-items">
            <li><NavLink to="home" className={({ isActive }) => (isActive ? 'currentlink' : '')}>Rockets</NavLink></li>
            <li><NavLink to="missions" className={({ isActive }) => (isActive ? 'currentlink' : '')}>Missions</NavLink></li>
            <li><NavLink to="profile" className={({ isActive }) => (isActive ? 'currentlink' : '')}>|&nbsp;&nbsp;&nbsp;My Profile</NavLink></li>
          </ul>
        </nav>
      </div>
      <hr className="nav-hr" />
      <Outlet />
    </div>
  );
}

export default NavLinks;
