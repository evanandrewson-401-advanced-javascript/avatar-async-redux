import characterReducer from '../reducers/charactersReducer';
import { UPDATE_CHARACTERS_LOADING, UPDATE_CHARACTERS_DONE, UPDATE_CHARACTERS } from '../actions/characterActions';

describe('Characters Reducer', () => {
  it('handles UPDATE_CHARACTERS_LOADING', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: UPDATE_CHARACTERS_LOADING
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [],
      characterLoading: true
    });
  });
  it('handles UPDATE_CHARACTERS_DONE', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: UPDATE_CHARACTERS_DONE
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [],
      characterLoading: true
    });
  });
  it('handles UPDATE_CHARACTERS', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: UPDATE_CHARACTERS,
      payload: [{
        _id: '5cf5679a915ecad153ab68c8',
        allies: [
          'Royal Earthbender Guards'
        ],
        enemies: [
          'Chin'
        ],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King',
        affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
      }]
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [{
        _id: '5cf5679a915ecad153ab68c8',
        allies: [
          'Royal Earthbender Guards'
        ],
        enemies: [
          'Chin'
        ],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King',
        affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
      }],
      characterLoading: false
    });
  });
});
