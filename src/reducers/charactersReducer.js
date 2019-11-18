import { UPDATE_CHARACTERS_LOADING, UPDATE_CHARACTERS_DONE, UPDATE_CHARACTERS } from '../actions/characterActions';


const initialState = {
  characterList: [],
  characterLoading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CHARACTERS_LOADING:
    case UPDATE_CHARACTERS_DONE:
      return { ... state, characterLoading: !state.characterLoading };
    case UPDATE_CHARACTERS:
      return { ...state, characterList: action.payload };
    default:
      return state;
  }
}
