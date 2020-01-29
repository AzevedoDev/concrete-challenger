import React from 'react';
import Search from '../../molecules/Search';
import * as S from './styles';

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo>
        Github <span>Search</span>
      </S.Logo>
      <Search />
    </S.Wrapper>
  );
}
