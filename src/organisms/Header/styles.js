import styled from 'styled-components';
import { Text } from '../../atoms';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.h1`
  ${Text.Logo};
  span {
    ${Text.LogoSpan}
  }
`;
