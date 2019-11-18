import { updateCharacters } from './characterActions';
jest.mock('../services/fetchCharacters', () => ({
  fetchCharacters: () => Promise.resolve([])
}));

describe('character actions', () => {
  it('updateCharacters dispatches the proper actions', () => {
    const thunk = updateCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      }); 
  });
});
