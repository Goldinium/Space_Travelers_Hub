import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const {
    id, rocketname, description, flickrimages,
  } = rocket;

  Rocket.propTypes = {
    rocket: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    rocketname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrimages: PropTypes.node.isRequired,
  };

  const dispatch = useDispatch();

  const [reserveBtnText, setReserveBtnText] = useState('Reserve Rocket');
  const [reserveBtnClass, setReserveBtnClass] = useState('reserve-btn');
  const [reserveBtnBadge, setReserveBtnBadge] = useState('hidebadge');

  const handleClick = () => {
    if (reserveBtnText === 'Reserve Rocket') {
      setReserveBtnText('Cancel Reservation');
      setReserveBtnClass('reserve-btn-fade');
      setReserveBtnBadge('showbadge');
      dispatch(updateRocket(id));
    }
    if (reserveBtnText === 'Cancel Reservation') {
      setReserveBtnText('Reserve Rocket');
      setReserveBtnClass('reserve-btn');
      setReserveBtnBadge('hidebadge');
      dispatch(updateRocket(id));
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
            <button type="button" className={reserveBtnBadge}>
              reserved
            </button>
            {description}
          </p>
        </li>
        <li className="btn-link">
          <button
            type="button"
            className={reserveBtnClass}
            onClick={handleClick}
          >
            { reserveBtnText }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Rocket;
