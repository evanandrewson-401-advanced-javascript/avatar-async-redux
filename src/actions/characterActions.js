import { fetchCharacters } from '../services/fetchCharacters';

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const UPDATE_CHARACTERS_LOADING = 'UPDATE_CHARACTERS_LOADING';
export const UPDATE_CHARACTERS_DONE = 'UPDATE_CHARACTERS_DONE';

export const updateCharacters = () => dispatch => {
  dispatch({
    type: UPDATE_CHARACTERS_LOADING
  });

  return fetchCharacters()
    .then(characters => {
      dispatch({
        type: UPDATE_CHARACTERS,
        payload: characters
      });
      dispatch({
        type: UPDATE_CHARACTERS_DONE
      });
    });

};
