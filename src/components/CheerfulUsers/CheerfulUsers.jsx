import React, { useState, useEffect } from 'react';
import './CheerfulUsers.scss';
import { getUsers } from '../../api/api';
import { User } from '../User/User';
import { Button } from '../Button/Button';

export const CheerfulUsers = () => {
  // const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(6);

  const addMoreUsers = () => {
    setUsersCount(prevUsersCount => prevUsersCount + 6);
  };

  // const getAllUsers = () => {
  //   getUsers()
  //     .then(data => setAllUsers(data));
  // };

  useEffect(() => {
    getUsers().then(data => data
      .sort((a, b) => a.registration_timestamp - b.registration_timestamp))
      .then(usersArray => usersArray.slice(0, usersCount))
      .then((result) => {
        setUsers(result);
      });
  }, [usersCount]);

  return (
    <section className="cheerful-users app__cheerful-users">
      <h2 className="cheerful-users__title">
        Our Cheerful users
      </h2>
      <p className="cheerful-users__subtitle">
        Attention! Sorting users by registration date
      </p>
      <div className="cheerful-users__users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </div>
      <Button
        title="Show more"
        onClick={addMoreUsers}
        centered
      />
    </section>
  );
};
