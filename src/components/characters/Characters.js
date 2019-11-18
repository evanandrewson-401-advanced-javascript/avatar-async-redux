import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const Characters = ({ items }) => {
  const elements = items.map((item, i) => {
    return <li key={item._id || i}><Character {...item} /></li>;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

Characters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
