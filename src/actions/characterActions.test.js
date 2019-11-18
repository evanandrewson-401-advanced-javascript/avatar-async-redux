import { updateCharacters, UPDATE_CHARACTERS, UPDATE_CHARACTERS_LOADING, UPDATE_CHARACTERS_DONE } from './characterActions';
jest.mock('../services/fetchCharacters', () => ({
  fetchCharacters: () => Promise.resolve([])
}));

describe('character actions', () => {
  it('updateCharacters dispatches the proper actions', () => {
    const result = updateCharacters();
    expect(result).toEqual({
      type: UPDATE_CHARACTERS,
      pendingType: UPDATE_CHARACTERS_LOADING,
      fulfilledType: UPDATE_CHARACTERS_DONE,
      payload: Promise.resolve([])
    });
  });
});
