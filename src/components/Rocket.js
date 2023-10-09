import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeMission } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  // const {
  //   itemId, title, author, category,
  // } = misson;

  console.log(rocket);

  Rocket.propTypes = {
    // itemId: PropTypes.string.isRequired,
    rocket: PropTypes.node.isRequired,
    // category: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired,
  };

  // const dispatch = useDispatch();

  return (
    <div className="book-card" />
  );
};

export default Rocket;
