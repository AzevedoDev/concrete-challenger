import styled from 'styled-components';
import { colors } from '../../styles/colors';
import Text from '../Text';

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  ${Text.Details};
  border: 1px solid #000;
`;
