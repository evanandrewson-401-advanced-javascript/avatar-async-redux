import React from 'react';
import { } from 'react-redux';
import PropTypes from 'prop-types';

const Character = ({ _id, name, photoUrl }) => {
  return (
    <>
      <img src={photoUrl} />
      <h1>{name}</h1>
    </>
  );
};

Character.propTypes = {
  toDetailPage: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
