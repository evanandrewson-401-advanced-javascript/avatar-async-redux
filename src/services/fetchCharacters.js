const fetchCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => res.json());
};

export default fetchCharacters;
