// eslint-disable-next-line max-len
const USERS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100';
// eslint-disable-next-line max-len
const POSITIONS_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

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
