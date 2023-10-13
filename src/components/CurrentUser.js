import React from 'react';
import { useSelector } from 'react-redux';

const CurrentUser = () => {
  const { allrockets } = useSelector((store) => store.rockets);
  const reservedRockets = allrockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-heading">My Missions</h2>
        <ul className="profile-list">
          {/* // just temporal stuff below, to hold space */}
          {reservedRockets.length > 0
            ? reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                missons
              </li>
            )) : (
              <p>No reserved Mission</p>
            )}
        </ul>
      </div>
      <div className="profile-card">
        <h2 className="profile-heading">My Rockets</h2>
        <ul className="profile-list">
          {reservedRockets.length > 0
            ? reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                {rocket.rocketname}
              </li>
            )) : (
              <p>No reserved Rocket</p>
            )}
        </ul>
      </div>
    </div>
  );
};

export default CurrentUser;
