import React from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c3f5b9c5169c801a4dfbaccb02630e216c1e7eb

  return (
    <tr>
      <td>{missionname}</td>
      <td>{description}</td>
      <td name="status">
        <div className="btn-link">
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c3f5b9c5169c801a4dfbaccb02630e216c1e7eb
        </div>
      </td>
      <td>
        <div className="btn-link">
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c3f5b9c5169c801a4dfbaccb02630e216c1e7eb
        </div>
      </td>
    </tr>
  );
};

export default Mission;
