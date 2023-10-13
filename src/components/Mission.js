import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeMissionByThunk } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const {
    missionname, description,
  } = mission;

  Mission.propTypes = {
    mission: PropTypes.node.isRequired,
    missionname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  // const dispatch = useDispatch();

  return (
    <tr>
      <td>{missionname}</td>
      <td>{description}</td>
      <td name="status">
        <div className="btn-link">
          <span
            type="button"
            className="inactive-btn-mission"
          >
            Not a member
          </span>
        </div>
        <div className="btn-link">
          <span
            type="button"
            className="active-btn-mission"
          >
            Active member
          </span>
        </div>
      </td>
      <td>
        <div className="btn-link">
          <button
            type="button"
            className="reserve-btn-mission"
          >
            Join Mission
          </button>
        </div>
        <div className="btn-link">
          <button
            type="button"
            className="leave-btn-mission"
          >
            Leave Mission
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Mission;
