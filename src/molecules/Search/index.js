import React, { useContext } from 'react';
import { Button, Input } from '../../atoms';
import searchIcon from '../../assets/search-icon.png';
import { UserContext } from '../../context/User';

import * as S from './styles';

export default function Search() {
  const { handleGetUser, handleSearchUser } = useContext(UserContext);

  return (
    <S.Container
      onSubmit={e => {
        e.preventDefault();
        handleSearchUser();
      }}
    >
      <Input handleGetUser={handleGetUser} />
      <Button type="submit" text="Search">
        <img src={searchIcon} alt="Search for github user" />
      </Button>
    </S.Container>
  );
}
