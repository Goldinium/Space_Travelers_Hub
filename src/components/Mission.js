import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelMission, reserveMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const {
    id, missionname, description, reserved,
  } = mission;

  Mission.propTypes = {
    id: PropTypes.string.isRequired,
    mission: PropTypes.node.isRequired,
    missionname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!reserved) {
      dispatch(reserveMission(id));
    }
    if (reserved) {
      dispatch(cancelMission(id));
    }
  };

  return (
    <tr>
      <td>{missionname}</td>
      <td>{description}</td>
      <td name="status">
        <div className="btn-link">
          {reserved ? (
            <span
              type="button"
              className="active-btn-mission"
            >
              Active member
            </span>
          ) : (
            <span
              type="button"
              className="inactive-btn-mission"
            >
              Not a member
            </span>
          )}
        </div>
      </td>
      <td>
        <div className="btn-link">
          {reserved ? (
            <button
              type="button"
              className="leave-btn-mission"
              onClick={handleClick}
            >
              Leave Mission
            </button>
          ) : (
            <button
              type="button"
              className="reserve-btn-mission"
              onClick={handleClick}
            >
              Join Mission
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default Mission;
