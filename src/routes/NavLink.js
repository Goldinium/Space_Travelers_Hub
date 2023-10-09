import { Link, Outlet } from 'react-router-dom';

function NavLink() {
  return (
    <div className="root-container">
      <div className="header">
        <h1 className="heading">
          Space Traveler&apos;s Hub
        </h1>
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
