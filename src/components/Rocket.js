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

  // const [reserveBtnStatus, setReserveBtnStatus] = useState(false);
  const [reserveBtnText, setReserveBtnText] = useState('Reserve Rocket');
  const [reserveBtnClass, setReserveBtnClass] = useState('reserve-btn');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((preValue) => ({
  //     ...preValue, [name]: value,
  //   }));
  // };

  const handleClick = () => {
    setReserveBtnText('Cancel Reservation');
    setReserveBtnClass('reserve-btn-fade');
    dispatch(updateRocket(id));
    // setReserveBtnStatus(true)
  };

  return (
    <div className="rocket-card">
      <div className="rocket-image-container">
        <img className="rocket-image" src={flickrimages} alt="A rocket" />
      </div>
      <ul className="rocket-details">
        <li><h2>{rocketname}</h2></li>
        <li>
          {/* <button
          className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')
        // }>
        //    {reserved}
          </button> */}
          <p>{description}</p>
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
