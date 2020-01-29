import React from 'react';
import t from 'prop-types';

import * as S from './styles';

export default function Button({ children, text, handleClick, type }) {
  return (
    <S.Button type={type} onClick={handleClick}>
      {children || text}
    </S.Button>
  );
}

Button.propTypes = {
  children: t.element,
  text: t.string,
  handleClick: t.func,
  type: t.string.isRequired,
};

Button.defaultProps = {
  children: '',
  text: 'button',
  handleClick: () => {},
};
