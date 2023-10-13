import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    rocketname, description, flickrimages,
  } = rocket;

  Rocket.propTypes = {
    rocket: PropTypes.node.isRequired,
    rocketname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrimages: PropTypes.node.isRequired,
  };

  return (
    <div className="rocket-card">
      <div className="rocket-image-container">
        <img className="rocket-image" src={flickrimages} alt="A rocket" />
      </div>
      <ul className="rocket-details">
        <li><h2>{rocketname}</h2></li>
        <li><p>{description}</p></li>
        <li className="btn-link">
          <button
            type="button"
            className="reserve-btn"
          >
            Reserve Rocket
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Rocket;
