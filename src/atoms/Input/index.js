import React from 'react';
import t from 'prop-types';
import * as S from './styles';

export default function Input({ handleGetUser }) {
  return <S.Input onChange={handleGetUser} />;
}

Input.propTypes = {
  handleGetUser: t.func.isRequired,
};
