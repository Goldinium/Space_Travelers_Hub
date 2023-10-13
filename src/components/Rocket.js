import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const {
    id, rocketname, description,
    flickrimages, reserved,

  } = rocket;

  Rocket.propTypes = {
    rocket: PropTypes.node.isRequired,
    rocketname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrimages: PropTypes.node.isRequired,
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!reserved) {
      dispatch(reserveRocket(id));
    }
    if (reserved) {
      dispatch(cancelRocket(id));
    }
  };

  return (
    <div className="rocket-card">
      <div className="rocket-image-container">
        <img className="rocket-image" src={flickrimages} alt="A rocket" />
      </div>
      <ul className="rocket-details">
        <li><h2>{rocketname}</h2></li>
        <li>
          <p>
            {reserved
              && (
              <button type="button" disabled className="showbadge">
                reserved
              </button>
              )}
            {description}
          </p>
        </li>
        <li className="btn-link">
          {reserved ? (
            <button type="button" className="reserve-btn-fade" onClick={handleClick}>
              Cancel Reservation
            </button>
          ) : (
            <button type="button" className="reserve-btn" onClick={handleClick}>
              Reserve Rocket
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Rocket;
