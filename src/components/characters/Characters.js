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
  toDetailPage: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Characters;
