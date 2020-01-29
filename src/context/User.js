import React, { createContext, useState } from 'react';
import t from 'prop-types';
import api from '../services/api';

export const UserContext = createContext();

export default function User({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const handleGetUser = ({ target }) => {
    setUser({ ...user, profile: target.value });
  };
  const handleSearchUser = async () => {
    try {
      setError({});
      const { data } = await api.get(`/users/${user.profile}`);
      setUser({ ...user, data });
    } catch ({ response }) {
      setError({ ...error, response });
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleGetUser,
        handleSearchUser,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

User.propTypes = {
  children: t.element.isRequired,
};
