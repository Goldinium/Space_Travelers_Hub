import { Link, Outlet } from 'react-router-dom';
import Planeticon from '../assets/Planeticon.png';

function NavLink() {
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
            <li><Link to="home">Rockets</Link></li>
            <li><Link to="missions">Missions</Link></li>
            <li><Link to="profile">|&nbsp;&nbsp;&nbsp;My Profile</Link></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default NavLink;
