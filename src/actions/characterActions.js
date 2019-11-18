import { fetchCharacters } from '../services/fetchCharacters';

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const UPDATE_CHARACTERS_LOADING = 'UPDATE_CHARACTERS_LOADING';
export const UPDATE_CHARACTERS_DONE = 'UPDATE_CHARACTERS_DONE';

// using PROMISE MIDDLEWARE
export const updateCharacters = () => ({
  type: UPDATE_CHARACTERS,
  pendingType: UPDATE_CHARACTERS_LOADING,
  fulfilledType: UPDATE_CHARACTERS_DONE,
  payload: fetchCharacters()
});




// USING THUNK MIDDLEWARE:
// export const updateCharacters = () => dispatch => {
//   dispatch({
//     type: UPDATE_CHARACTERS_LOADING
//   });

//   return fetchCharacters()
//     .then(characters => {
//       dispatch({
//         type: UPDATE_CHARACTERS,
//         payload: characters
//       });
//       dispatch({
//         type: UPDATE_CHARACTERS_DONE
//       });
//     });

// };
