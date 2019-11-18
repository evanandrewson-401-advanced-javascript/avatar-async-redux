import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../characters/Characters';
import { getCharacters, getCharacterLoading } from '../../selectors/charactersSelectors';
import { updateCharacters } from '../../actions/characterActions';

const CharacterContainer = () => {
  const characters = useSelector(getCharacters);
  const characterLoading = useSelector(getCharacterLoading);
  const dispatch = useDispatch();
  const updateCharacterList = () => dispatch(updateCharacters());

  useEffect(() => {
    updateCharacterList();
  }, []);

  if(characterLoading) return <h1>Loading...</h1>;

  return <Characters items={characters} />;
};

export default CharacterContainer;
