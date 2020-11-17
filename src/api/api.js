// eslint-disable-next-line max-len
const USERS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100';
// eslint-disable-next-line max-len
const POSITIONS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
// eslint-disable-next-line max-len
const TOKEN_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const getUsers = () => {
  const users = fetch(USERS_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('users response is not ok');
    })
    .then(data => data.users);

  return users;
};

export const getPositions = () => {
  const positions = fetch(POSITIONS_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('positions response is not ok');
    })
    .then(data => data.positions);

  return positions;
};

export const getToken = () => {
  const token = fetch(TOKEN_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('token response is not ok');
    })
    .then(data => data.token);

  return token;
};
