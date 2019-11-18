import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../characters/Characters';

const CharacterContainer = () => {
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();
  const updateCharacters = dispatch(updateCharacters());

  useEffect(() => {
    updateCharacters();
  }, []);

  return <Characters items={characters} />;
};

export default CharacterContainer;
