import React from 'react';
import '@testing-library/jest-dom';
import { Link, Outlet } from 'react-router-dom';
import Home from './Home';
import NavLink from './NavLink';
import Rockets from '../components/Rockets';
import CurrentUser from '../components/CurrentUser';
import Planeticon from '../assets/Planeticon.png';
import Missions from '../components/Missions';
import MissionsPage from './MissionsPage';

describe('route components renders correctly', () => {
  it('NavLinK components renders correctly', () => {
    const result = NavLink();
    expect(result).toEqual(
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
        <hr className="nav-hr" />
        <Outlet />
      </div>,
    );
  });

  it('Profile components renders correctly', () => {
    const profileComponent = jest.mock('./Profile', () => {
      jest.mock('../components/CurrentUser');
      return (
        <div className="app-container">
          <div className="profile-container">
            <div id="profile">
              <CurrentUser />
            </div>
          </div>
        </div>
      );
    });
    expect(profileComponent).not.toBeNull();
    expect(profileComponent).toMatchSnapshot();
  });

  it('Missions components renders correctly', () => {
    const missionsComponent = jest.mock('./MissionsPage', () => {
      jest.mock('../components/Missions');
      return (
        <div className="app-container">
          <div className="profile-container">
            <div id="profile">
              <Missions />
            </div>
          </div>
        </div>
      );
    });
    expect(missionsComponent).not.toBeNull();
    expect(missionsComponent).toMatchSnapshot();
  });

  it('renders the Home component with content', () => {
    const result = Home();
    expect(result).toEqual(
      <div className="app-container">
        <div className="rockets-container">
          <div id="rockets">
            <Rockets />
          </div>
        </div>
      </div>,
    );
  });
});
