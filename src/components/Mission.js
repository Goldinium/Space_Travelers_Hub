import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeMissionByThunk } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const {
    id, missionname, description, flickrimages,
  } = mission;

  console.log(id);

  Mission.propTypes = {
    mission: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    missionname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrimages: PropTypes.node.isRequired,
  };

  // const dispatch = useDispatch();

  return (
    <div className="mission-card">
      <div className="mission-image-container">
        <img className="mission-image" src={flickrimages} alt="A mission" />
      </div>
      <ul className="mission-details">
        <li><h2>{missionname}</h2></li>
        <li><p>{description}</p></li>
        <li className="btn-link">
          <button
            type="button"
            className="reserve-btn"
            // onClick={dispatch(removeMissionByThunk(id))}
          >
            Reserve Mission
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Mission;
