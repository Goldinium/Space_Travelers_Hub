import { Link, Outlet } from 'react-router-dom';

function NavLink() {
  return (
    <div className="root-container">
      <div className="header">
        <h1 className="heading">
          Space Traveler&apos;s Hub
        </h1>
        <nav className="navbar">
          <ul className="nav-items">
            <li><Link to="Rockets">Rockets</Link></li>
            {/* <li><Link to="Missions">Missions</Link></li> */}
          </ul>
          <Link to="Profile">My Profile</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default NavLink;
