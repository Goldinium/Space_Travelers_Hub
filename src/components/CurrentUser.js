import React from 'react';
import { useSelector } from 'react-redux';

const CurrentUser = () => {
  const { allrockets } = useSelector((store) => store.rockets);
  const { allmissions } = useSelector((store) => store.missions);
  const reservedRockets = allrockets.filter((rocket) => rocket.reserved);
  const reservedMissions = allmissions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-heading">My Missions</h2>
        <ul className="profile-list">
          {reservedMissions.length > 0
            ? reservedMissions.map((mission) => (
              <li key={mission.id}>
                { mission.missionname }
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
