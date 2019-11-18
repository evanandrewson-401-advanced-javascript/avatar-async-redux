import React from 'react';
import { Link } from 'react-redux';
import PropTypes from 'prop-types';

const Character = ({ _id, name, photoUrl }) => {
  return (
    <Link to={`/character/${_id}`}>
      <img src={photoUrl} />
      <h1>{name}</h1>
    </ Link>
  );
};

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
