import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeRocketByThunk } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const {
    id, rocketname, description, flickrimages,
  } = rocket;

  console.log(id);

  Rocket.propTypes = {
    rocket: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    rocketname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrimages: PropTypes.node.isRequired,
  };

  // const dispatch = useDispatch();

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
            // onClick={dispatch(removeRocketByThunk(id))}
          >
            Reserve Rocket
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Rocket;
